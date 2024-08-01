import * as Yup from "yup";

const generalInformationsSchema = Yup.object().shape({
  customerId: Yup.number().required("Customer ID is required"),
  project: Yup.string().required("Project is required"),
  modelVehicle: Yup.string().required("Model Vehicle is required"),
  country: Yup.string().required("Country is required"),
  productionSite: Yup.string().required("Production Site is required"),
  quoteDispatchDate: Yup.date().required("Quote Dispatch Date is required"),
  firstYearOfCAA: Yup.number().required("First Year of CAA is required"),
  firstSopDate: Yup.date().required("First SOP Date is required"),
  currencyId: Yup.number().required("Currency ID is required"),
});

const teamSchema = Yup.object().shape({
  platformManager: Yup.string().required("Platform Manager is required"),
  technicalProjectLeader: Yup.string().required(
    "Technical Project Leader is required"
  ),
  purchasingLeader: Yup.string().required("Purchasing Leader is required"),
  processLeader: Yup.string().required("Process Leader is required"),
  financeContributor: Yup.string().required("Finance Contributor is required"),
  salesLeader: Yup.string().required("Sales Leader is required"),
  projectName: Yup.string().required("Project Name is required"),
  productName: Yup.string().required("Product Name is required"),
});

const refFormDataSchema = Yup.object().shape({
  value: Yup.string().required("Reference value is required"),
  productId: Yup.number().required("Product ID is required"),
});

const milestonesSchema = Yup.object()
  .shape({
    npav: Yup.date().nullable(),
    caav: Yup.date().nullable(),
    prkf: Yup.date().nullable(),
    reqf: Yup.date().nullable(),
    isd: Yup.date().nullable(),
    soco: Yup.date().nullable(),
    ffv: Yup.date().nullable(),
    efv: Yup.date().nullable(),
    desf: Yup.date().nullable(),
    iarv: Yup.date().nullable(),
    afv: Yup.date().nullable(),
    togo: Yup.date().nullable(),
    ofto: Yup.date().nullable(),
    otop: Yup.date().nullable(),
    fdpr: Yup.date().nullable(),
    sssr: Yup.date().nullable(),
    crar: Yup.date().nullable(),
    isva: Yup.date().nullable(),
    sopr: Yup.date().nullable(),
    sop: Yup.date().nullable(),
    prcl: Yup.date().nullable(),
  })
  .required();

const materialRatesSchema = Yup.object().shape({
  id: Yup.number().required("ID is required"),
  aluLME: Yup.number().required("ALU LME is required"),
  aluPremiumYinbang: Yup.number().required("ALU Premium Yinbang is required"),
  aluPremiumAlcha: Yup.number().required("ALU Premium Alcha is required"),
  aluPremium: Yup.number().required("ALU Premium is required"),
  aluMidwestDDU: Yup.number().required("ALU Midwest DDU is required"),
  aluSHFE: Yup.number().required("ALU SHFE is required"),
  stampingStockSidePlate: Yup.number().required(
    "Stamping Stock Side Plate is required"
  ),
  stampingStockManifolds: Yup.number().required(
    "Stamping Stock Manifolds is required"
  ),
  pptv20: Yup.number().required("PPTV 20 is required"),
  pptv40: Yup.number().required("PPTV 40 is required"),
  pp54Scolefin: Yup.number().required("PP 54 Scolefin is required"),
  ppGf30: Yup.number().required("PP GF 30 is required"),
  pa6Gf30: Yup.number().required("PA 6 GF 30 is required"),
  pa610: Yup.number().required("PA 610 is required"),
  pa66Gf30: Yup.number().required("PA 66 GF 30 is required"),
  pa66Gf35: Yup.number().required("PA 66 GF 35 is required"),
  ppaGf50: Yup.number().required("PPA GF 50 is required"),
  abs: Yup.number().required("ABS is required"),
  pom: Yup.number().required("POM is required"),
  tpeShore40: Yup.number().required("TPE Shore 40 is required"),
  tpeShore25: Yup.number().required("TPE Shore 25 is required"),
  molykoteGrease: Yup.number().required("Molykote Grease is required"),
  pptv40TpeShore40: Yup.number().required("PPTV 40 TPE Shore 40 is required"),
  ppC3IndexValue: Yup.number().required("PP C3 Index Value is required"),
});

const currencyRatesSchema = Yup.object().shape({
  usd: Yup.number().nullable(),
  cny: Yup.number().nullable(),
  thb: Yup.number().nullable(),
  inr: Yup.number().nullable(),
  pln: Yup.number().nullable(),
  jpy: Yup.number().nullable(),
  brl: Yup.number().nullable(),
  rub: Yup.number().nullable(),
  czk: Yup.number().nullable(),
  try: Yup.number().nullable(),
  mrd: Yup.number().nullable(),
  eur: Yup.number().nullable(),
  krw: Yup.number().nullable(),
  ron: Yup.number().nullable(),
  zar: Yup.number().nullable(),
});

const keyInputSchema = Yup.object().shape({
  generalInformations: generalInformationsSchema,
  team: teamSchema,
  refs: Yup.array().of(refFormDataSchema).required(),
  milestones: milestonesSchema,
  materialRates: materialRatesSchema,
  currencyRates: currencyRatesSchema,
});

export { keyInputSchema };
