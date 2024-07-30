import { User } from "@/shared/modules/types/user.type";
import { Context } from "@apollo/client";
import { UpdateInput } from "@/subdomains/users/types";

const userResolvers = {
  Query: {
    users: async (
      _: any,
      __: any,
      context: { dataSources: { users: { getAllUsers: () => any } } }
    ) => {
      try {
        return await context.dataSources.users.getAllUsers();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { input }: { input: User },
      context: Context
    ) => {
      try {
        const newUser = await context.dataSources.users.createUser({
          input,
        });
        return newUser;
      } catch (error) {
        console.log("error", error);
        throw new Error("Failed to create user");
      }
    },
    updateUser: async (
      _: any,
      { input }: { input: UpdateInput },
      context: Context
    ) => {
      try {
        const newUser = await context.dataSources.users.updateUser({
          input,
        });
        return newUser;
      } catch (error) {
        console.log("error", error);
        throw new Error("Failed to create user");
      }
    },
  },
};

export default userResolvers;
