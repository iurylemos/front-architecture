import { Context } from "@apollo/client";
import {
  KeyInputPayload,
  NewKeyInputsInput,
  UpdateKeyInputsInput,
  KeyInputAction,
  NewCurrencyInput,
  UpdateCurrencyInput,
  NewCustomerInput,
  UpdateCustomerInput,
} from "@/subdomains/keyinput/types";
import { Currency, Customer } from "@prisma/client";
import { DataSourceKeyInputs } from "@/subdomains/keyinput/datasource";

// Key Input Resolvers
const keyInputResolvers = {
  Query: {
    keyInputs: async (
      _: any,
      __: any,
      context: { dataSources: { keyInputs: DataSourceKeyInputs } }
    ): Promise<KeyInputPayload[]> => {
      try {
        return await context.dataSources.keyInputs.getAllKeyInputs();
      } catch (error) {
        console.error("Failed to fetch KeyInputs", error);
        throw new Error("Failed to fetch KeyInputs");
      }
    },
  },
  Mutation: {
    createKeyInput: async (
      _: any,
      { input }: { input: NewKeyInputsInput },
      context: Context
    ): Promise<KeyInputAction> => {
      try {
        return await context.dataSources.keyInputs.createKeyInput(input);
      } catch (error) {
        console.log("createKeyInput - Error", error);
        throw new Error("Failed to create KeyInput");
      }
    },
    updateKeyInput: async (
      _: any,
      { input }: { input: UpdateKeyInputsInput },
      context: Context
    ): Promise<KeyInputAction> => {
      try {
        return await context.dataSources.keyInputs.updateKeyInput(input);
      } catch (error) {
        console.log("updateKeyInput - Error", error);
        throw new Error("Failed to update KeyInput");
      }
    },
    deleteKeyInput: async (
      _: any,
      { id }: { id: number },
      context: Context
    ): Promise<KeyInputAction> => {
      try {
        return await context.dataSources.keyInputs.deleteKeyInput(id);
      } catch (error) {
        console.log("deleteKeyInput - Error", error);
        throw new Error("Failed to delete KeyInput");
      }
    },
  },
};

// Currency Resolvers
const currencyResolvers = {
  Query: {
    currencies: async (
      _: any,
      __: any,
      context: { dataSources: { keyInputs: DataSourceKeyInputs } }
    ): Promise<Currency[]> => {
      try {
        return await context.dataSources.keyInputs.getAllCurrencies();
      } catch (error) {
        console.error("Failed to fetch currencies", error);
        throw new Error("Failed to fetch currencies");
      }
    },
  },
  Mutation: {
    createCurrency: async (
      _: any,
      { input }: { input: NewCurrencyInput },
      context: Context
    ): Promise<Currency> => {
      try {
        return await context.dataSources.keyInputs.createCurrency(input);
      } catch (error) {
        console.log("createCurrency - Error", error);
        throw new Error("Failed to create Currency");
      }
    },
    updateCurrency: async (
      _: any,
      { input }: { input: UpdateCurrencyInput },
      context: Context
    ): Promise<Currency> => {
      try {
        return await context.dataSources.keyInputs.updateCurrency(input);
      } catch (error) {
        console.log("updateCurrency - Error", error);
        throw new Error("Failed to update Currency");
      }
    },
    deleteCurrency: async (
      _: any,
      { id }: { id: number },
      context: Context
    ): Promise<Currency> => {
      try {
        return await context.dataSources.keyInputs.deleteCurrency(id);
      } catch (error) {
        console.log("deleteCurrency - Error", error);
        throw new Error("Failed to delete Currency");
      }
    },
  },
};

// Customer Resolvers
const customerResolvers = {
  Query: {
    customers: async (
      _: any,
      __: any,
      context: { dataSources: { keyInputs: DataSourceKeyInputs } }
    ): Promise<Customer[]> => {
      try {
        return await context.dataSources.keyInputs.getAllCustomers();
      } catch (error) {
        console.error("Failed to fetch customers", error);
        throw new Error("Failed to fetch customers");
      }
    },
  },
  Mutation: {
    createCustomer: async (
      _: any,
      { input }: { input: NewCustomerInput },
      context: Context
    ): Promise<Customer> => {
      try {
        return await context.dataSources.keyInputs.createCustomer(input);
      } catch (error) {
        console.log("createCustomer - Error", error);
        throw new Error("Failed to create customer");
      }
    },
    updateCustomer: async (
      _: any,
      { input }: { input: UpdateCustomerInput },
      context: Context
    ): Promise<Customer> => {
      try {
        return await context.dataSources.keyInputs.updateCustomer(input);
      } catch (error) {
        console.log("updateCustomer - Error", error);
        throw new Error("Failed to update customer");
      }
    },
    deleteCustomer: async (
      _: any,
      { id }: { id: number },
      context: Context
    ): Promise<Customer> => {
      try {
        return await context.dataSources.keyInputs.deleteCustomer(id);
      } catch (error) {
        console.log("deleteCustomer - Error", error);
        throw new Error("Failed to delete customer");
      }
    },
  },
};

export { keyInputResolvers, currencyResolvers, customerResolvers };
