import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DataSourceUsers {
  // Function to fetch all users
  async getAllUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to create a new user
  async createUser({ input }: any) {
    try {
      return await prisma.user.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
}
