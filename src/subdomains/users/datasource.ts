import { User } from "@/shared/modules/types/user.type";
import { PrismaClient } from "@prisma/client";
import { UpdateInput } from "@/subdomains/users/types";

const prisma = new PrismaClient();
export class DataSourceUsers {
  // Function to fetch all users
  async getAllUsers(): Promise<UpdateInput[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to create a new user
  async createUser({ input }: { input: User }): Promise<UpdateInput> {
    try {
      return await prisma.user.create({
        data: {
          ...input,
          active: true,
        },
      });
    } catch (error) {
      console.log("createUser - Error", error);
      throw new Error("Failed to create user");
    }
  }

  async updateUser({ input }: { input: UpdateInput }): Promise<UpdateInput> {
    try {
      const keyId = "id";

      const { [keyId]: id, ...rest } = input;

      const checkUser = await prisma.user.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!checkUser) throw new Error("User does not exists");

      const userUpdated = await prisma.user.update({
        where: {
          id: checkUser.id,
        },
        data: {
          ...rest,
        },
      });

      return userUpdated;
    } catch (error) {
      console.log("upddateUser - Error", error);
      throw new Error("Failed to update user");
    }
  }
}
