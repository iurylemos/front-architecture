import { Prisma } from "@prisma/client";

export type TriggerEventKeyInputForm =
  | "generalInformations"
  | "team"
  | "refs"
  | "milestones"
  | "currencyRates"
  | "materialRates";

export type KeyInputPayload = Prisma.KeyInputsGetPayload<{
  include: {
    refs: {
      include: {
        product: true; // Include the related product
      };
    };
    currency: true; // Include the related currency
    currencyRates: true; // Include the related currency rates
    materialRates: true; // Include the related material rates
    generalInformations: true; // Include the related GeneralInformations
    team: true; // Include the related team
    milestones: true; // Include the related milestones
  };
}>;

export interface NewCurrencyInput {
  name: string;
  symbol: string;
  exchangeRate: number; // Example field
}

// Define the update input type for currency
export interface UpdateCurrencyInput {
  id: number; // The unique identifier for the currency
  name?: string; // Optional fields
  symbol?: string;
  exchangeRate?: number;
}

export interface NewCustomerInput {
  name: string;
  email: string;
  contactNumber?: string; // Optional field
  address?: string; // Optional field
  country: string;
  isActive?: boolean; // Optional field
}

// Define the update input type for customer
export interface UpdateCustomerInput {
  id: number; // The unique identifier for the customer
  name?: string; // Optional fields
  email?: string;
  contactNumber?: string;
  address?: string;
  country?: string;
  isActive?: boolean;
}

export type KeyInputAction = Prisma.KeyInputsGetPayload<{
  include: {
    currency: true;
    currencyRates: true;
    materialRates: true;
    generalInformations: true;
    team: true;
    milestones: true;
    refs: true;
  };
}>;

export interface KeyInputFormData {
  generalInformations: {
    customerId: number;
    project: string;
    modelVehicle: string;
    country: string;
    productionSite: string;
    quoteDispatchDate: Date;
    firstYearOfCAA: number;
    firstSopDate: Date;
    currencyId: number;
  };
  team: {
    platformManager: string;
    technicalProjectLeader: string;
    purchasingLeader: string;
    processLeader: string;
    financeContributor: string;
    salesLeader: string;
    projectName: string;
    productName: string;
  };
  refs: RefFormData[];
  milestones: Milestone;
  materialRates: {
    id: number;
    aluLME: number;
    aluPremiumYinbang: number;
    aluPremiumAlcha: number;
    aluPremium: number;
    aluMidwestDDU: number;
    aluSHFE: number;
    stampingStockSidePlate: number;
    stampingStockManifolds: number;
    pptv20: number;
    pptv40: number;
    pp54Scolefin: number;
    ppGf30: number;
    pa6Gf30: number;
    pa610: number;
    pa66Gf30: number;
    pa66Gf35: number;
    ppaGf50: number;
    abs: number;
    pom: number;
    tpeShore40: number;
    tpeShore25: number;
    molykoteGrease: number;
    pptv40TpeShore40: number;
    ppC3IndexValue: number;
  };
  currencyRates: CurrencyRate;
}

export interface CurrencyRate {
  usd?: number | null;
  cny?: number | null;
  thb?: number | null;
  inr?: number | null;
  pln?: number | null;
  jpy?: number | null;
  brl?: number | null;
  rub?: number | null;
  czk?: number | null;
  try?: number | null;
  mrd?: number | null;
  eur?: number | null;
  krw?: number | null;
  ron?: number | null;
  zar?: number | null;
}

export interface RefFormData {
  id?: number;
  name: string;
  productId: number;
  bomId?: number | null;
  keyInputsId?: number | null;
}

export interface Milestone {
  npav?: Date | null | undefined;
  caav?: Date | null | undefined;
  prkf?: Date | null | undefined;
  reqf?: Date | null | undefined;
  isd?: Date | null | undefined;
  soco?: Date | null | undefined;
  ffv?: Date | null | undefined;
  efv?: Date | null | undefined;
  desf?: Date | null | undefined;
  iarv?: Date | null | undefined;
  afv?: Date | null | undefined;
  togo?: Date | null | undefined;
  ofto?: Date | null | undefined;
  otop?: Date | null | undefined;
  fdpr?: Date | null | undefined;
  sssr?: Date | null | undefined;
  crar?: Date | null | undefined;
  isva?: Date | null | undefined;
  sopr?: Date | null | undefined;
  sop?: Date | null | undefined;
  prcl?: Date | null | undefined;
}

export interface KeyInputs {
  id: number;
  generalInformationsId?: number | null;
  teamId?: number | null;
  currencyId: number;
  currencyRatesId: number;
  materialRatesId: number;
  milestonesId?: number | null;
  refs: Reference[];
  currency: Currency;
  currencyRates: CurrencyRates;
  materialRates: MaterialRates;
  generalInformations?: GeneralInformationsKeyInputs | null;
  team?: TeamKeyInputs | null;
  milestones?: Milestones | null;
}

export interface NewKeyInputsInput {
  generalInformationsId?: number;
  teamId?: number;
  currencyId: number;
  currencyRatesId: number;
  materialRatesId: number;
  milestonesId?: number;
}

export interface UpdateKeyInputsInput {
  id: number;
  generalInformationsId?: number;
  teamId?: number;
  currencyId?: number;
  currencyRatesId?: number;
  materialRatesId?: number;
  milestonesId?: number;
}

export interface Reference {
  id: number;
  name: string;
  productId: number;
  bomId?: number | null;
  keyInputsId?: number | null;
  product: Product;
}

export interface Currency {
  id: number;
  name: string;
  generalInformations: GeneralInformationsKeyInputs[];
  keyInputs: KeyInputs[];
}

export interface GeneralInformationsKeyInputs {
  id: number;
  customerId: number;
  project: string;
  modelVehicle: string;
  country: string;
  productionSite: string;
  quoteDispatchDate: Date;
  firstYearOfCAA: number;
  firstSopDate: Date;
  currencyId: number;
  keyInputId?: number;
  keyInputs?: KeyInputs;
  customer: Customer;
  currency: Currency;
}

export interface TeamKeyInputs {
  id: number;
  platformManager: string;
  technicalProjectLeader: string;
  purchasingLeader: string;
  processLeader: string;
  financeContributor: string;
  salesLeader: string;
  projectName: string;
  productName: string;
  keyInputId?: number;
  keyInputs?: KeyInputs;
}

export interface CurrencyRates {
  id: number;
  usd?: number;
  cny?: number;
  thb?: number;
  inr?: number;
  pln?: number;
  jpy?: number;
  brl?: number;
  rub?: number;
  czk?: number;
  try?: number;
  mrd?: number;
  eur?: number;
  krw?: number;
  ron?: number;
  zar?: number;
  keyInputs: KeyInputs[];
}

export interface MaterialRates {
  id: number;
  aluLME?: number;
  aluPremiumYinbang?: number;
  aluPremiumAlcha?: number;
  aluPremium?: number;
  aluMidwestDDU?: number;
  aluSHFE?: number;
  stampingStockSidePlate?: number;
  stampingStockManifolds?: number;
  pptv20?: number;
  pptv40?: number;
  pp54Scolefin?: number;
  ppGf30?: number;
  pa6Gf30?: number;
  pa610?: number;
  pa66Gf30?: number;
  pa66Gf35?: number;
  ppaGf50?: number;
  abs?: number;
  pom?: number;
  tpeShore40?: number;
  tpeShore25?: number;
  molykoteGrease?: number;
  pptv40TpeShore40?: number;
  ppC3IndexValue?: number;
  keyInputs: KeyInputs[];
}

export interface Milestones {
  id: number;
  npav?: Date | null;
  caav?: Date | null;
  prkf?: Date | null;
  reqf?: Date | null;
  isd?: Date | null;
  soco?: Date | null;
  ffv?: Date | null;
  efv?: Date | null;
  desf?: Date | null;
  iarv?: Date | null;
  afv?: Date | null;
  togo?: Date | null;
  ofto?: Date | null;
  otop?: Date | null;
  fdpr?: Date | null;
  sssr?: Date | null;
  crar?: Date | null;
  isva?: Date | null;
  sopr?: Date | null;
  sop?: Date | null;
  prcl?: Date | null;
  keyInputs: KeyInputs[];
}

export interface Product {
  id: number;
  name: string;
  references: Reference[];
  boms: Bom[];
}

export interface Customer {
  id: number;
  name: string;
  generalInformations: GeneralInformationsKeyInputs[];
}

export interface Bom {
  id: number;
  BOM: string;
  Description: string;
  MaterialType: string;
  WeightGrossFilledByPurchasing: string;
  WeightNetFilledByRD: string;
  Material: string;
  MaterialPurchaseCurrency: string;
  MaterialCostInPurchaseCurrency: string;
  VP: string;
  PTBV: string;
  MakeBuyIntercos: string;
  Supplier: string;
  Country: string;
  Incoterms: string;
  ComponentPurchaseCurrency: string;
  AVInCompPurchCurrency: string;
  ComponentCostAtPurchaseCurrency: string;
  ComponentInCurrency: string;
  FreightInCurrency: string;
  PackagingInCurrency: string;
  DutiesInCurrency: string;
  Target: string;
  CommentsOnPV_PTBVPrice_LTA_AndProductivitiesLifetime: string;
  Sops: Sops[];
  Total: string;
  productId: number;
  product: Product;
  refs: Reference[];
}
export interface Sops {
  id: number;
  value: string;
  bomId: number;
  bom: Bom;
}
