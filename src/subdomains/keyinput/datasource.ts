import { prismaClient } from "@/shared/modules/prisma/prisma.client";
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

export class DataSourceKeyInputs {
  // Function to fetch all KeyInputs
  async getAllKeyInputs(): Promise<KeyInputPayload[]> {
    try {
      const keys = await prismaClient.keyInputs.findMany({
        include: {
          refs: {
            include: {
              product: true, // Include the related product
            },
          },
          currency: true, // Include the related currency
          currencyRates: true, // Include the related currency rates
          materialRates: true, // Include the related material rates
          generalInformations: true, // Include the related GeneralInformations
          team: true, // Include the related team
          milestones: true, // Include the related milestones
        },
      });

      return keys;
    } catch (error) {
      console.error("Failed to fetch KeyInputs", error);
      throw new Error("Failed to fetch KeyInputs");
    }
  }

  // Function to create a new KeyInput
  async createKeyInput(input: NewKeyInputsInput): Promise<KeyInputAction> {
    try {
      return await prismaClient.keyInputs.create({
        data: {
          ...input,
        },
        include: {
          currency: true,
          currencyRates: true,
          materialRates: true,
          generalInformations: true,
          team: true,
          milestones: true,
          refs: true,
        },
      });
    } catch (error) {
      console.log("createKeyInput - Error", error);
      throw new Error("Failed to create KeyInput");
    }
  }

  // Function to update an existing KeyInput
  async updateKeyInput(input: UpdateKeyInputsInput): Promise<KeyInputAction> {
    try {
      const { id, ...rest } = input;

      const checkKeyInput = await prismaClient.keyInputs.findFirst({
        where: { id: Number(id) },
      });

      if (!checkKeyInput) throw new Error("KeyInput does not exist");

      return await prismaClient.keyInputs.update({
        where: { id: checkKeyInput.id },
        data: {
          ...rest,
        },
        include: {
          currency: true,
          currencyRates: true,
          materialRates: true,
          generalInformations: true,
          team: true,
          milestones: true,
          refs: true,
        },
      });
    } catch (error) {
      console.log("updateKeyInput - Error", error);
      throw new Error("Failed to update KeyInput");
    }
  }

  // Function to delete an existing KeyInput
  async deleteKeyInput(id: number): Promise<KeyInputAction> {
    try {
      const checkKeyInput = await prismaClient.keyInputs.findFirst({
        where: { id },
      });

      if (!checkKeyInput) throw new Error("KeyInput does not exist");

      return await prismaClient.keyInputs.delete({
        where: { id },
        include: {
          currency: true,
          currencyRates: true,
          materialRates: true,
          generalInformations: true,
          team: true,
          milestones: true,
          refs: true,
        },
      });
    } catch (error) {
      console.log("deleteKeyInput - Error", error);
      throw new Error("Failed to delete KeyInput");
    }
  }

  // Currency Methods
  async getAllCurrencies(): Promise<Currency[]> {
    try {
      return await prismaClient.currency.findMany();
    } catch (error) {
      console.error("Failed to fetch Currencies", error);
      throw new Error("Failed to fetch Currencies");
    }
  }

  async createCurrency(input: NewCurrencyInput): Promise<Currency> {
    try {
      return await prismaClient.currency.create({
        data: input,
      });
    } catch (error) {
      console.log("createCurrency - Error", error);
      throw new Error("Failed to create Currency");
    }
  }

  async updateCurrency(input: UpdateCurrencyInput): Promise<Currency> {
    try {
      const { id, ...rest } = input;

      const checkCurrency = await prismaClient.currency.findFirst({
        where: { id: Number(id) },
      });

      if (!checkCurrency) throw new Error("Currency does not exist");

      return await prismaClient.currency.update({
        where: { id: checkCurrency.id },
        data: rest,
      });
    } catch (error) {
      console.log("updateCurrency - Error", error);
      throw new Error("Failed to update Currency");
    }
  }

  async deleteCurrency(id: number): Promise<Currency> {
    try {
      const checkCurrency = await prismaClient.currency.findFirst({
        where: { id },
      });

      if (!checkCurrency) throw new Error("Currency does not exist");

      return await prismaClient.currency.delete({
        where: { id },
      });
    } catch (error) {
      console.log("deleteCurrency - Error", error);
      throw new Error("Failed to delete Currency");
    }
  }

  // Customer Methods
  async getAllCustomers(): Promise<Customer[]> {
    try {
      return await prismaClient.customer.findMany();
    } catch (error) {
      console.error("Failed to fetch Customers", error);
      throw new Error("Failed to fetch Customers");
    }
  }

  async createCustomer(input: NewCustomerInput): Promise<Customer> {
    try {
      return await prismaClient.customer.create({
        data: input,
      });
    } catch (error) {
      console.log("createCustomer - Error", error);
      throw new Error("Failed to create Customer");
    }
  }

  async updateCustomer(input: UpdateCustomerInput): Promise<Customer> {
    try {
      const { id, ...rest } = input;

      const checkCustomer = await prismaClient.customer.findFirst({
        where: { id: Number(id) },
      });

      if (!checkCustomer) throw new Error("Customer does not exist");

      return await prismaClient.customer.update({
        where: { id: checkCustomer.id },
        data: rest,
      });
    } catch (error) {
      console.log("updateCustomer - Error", error);
      throw new Error("Failed to update Customer");
    }
  }

  async deleteCustomer(id: number): Promise<Customer> {
    try {
      const checkCustomer = await prismaClient.customer.findFirst({
        where: { id },
      });

      if (!checkCustomer) throw new Error("Customer does not exist");

      return await prismaClient.customer.delete({
        where: { id },
      });
    } catch (error) {
      console.log("deleteCustomer - Error", error);
      throw new Error("Failed to delete Customer");
    }
  }
}
