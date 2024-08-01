import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import userSchemas from "@/subdomains/users/schemas";
import userResolvers from "@/subdomains/users/resolvers";
import {
  generalInformationsKeyInputsSchema,
  keyInputBomSchema,
  keyInputCurrencyRatesSchema,
  keyInputCurrencySchema,
  keyInputCustomerSchema,
  keyInputMaterialRatesSchema,
  keyInputMilestonesSchema,
  keyInputProductSchema,
  keyInputReferenceSchema,
  keyInputSchema,
  keyInputSopsSchema,
  teamKeyInputsSchema,
} from "@/subdomains/keyinput/schemas";
import {
  keyInputResolvers,
  currencyResolvers,
  customerResolvers,
} from "@/subdomains/keyinput/resolvers";

const schemas = [
  userSchemas,
  keyInputBomSchema,
  keyInputSopsSchema,
  keyInputCustomerSchema,
  keyInputCurrencySchema,
  keyInputProductSchema,
  generalInformationsKeyInputsSchema,
  teamKeyInputsSchema,
  keyInputSchema,
  keyInputReferenceSchema,
  keyInputMilestonesSchema,
  keyInputCurrencyRatesSchema,
  keyInputMaterialRatesSchema,
];

const resolvers = [
  userResolvers,
  keyInputResolvers,
  currencyResolvers,
  customerResolvers,
];

export const typeDefs = mergeTypeDefs(schemas);
export const mergedResolvers = mergeResolvers(resolvers);
