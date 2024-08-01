const keyInputBomSchema = `#graphql
  type Bom {
    id: ID!
    BOM: String!
    Description: String!
    MaterialType: String!
    WeightGrossFilledByPurchasing: String!
    WeightNetFilledByRD: String!
    Material: String!
    MaterialPurchaseCurrency: String!
    MaterialCostInPurchaseCurrency: String!
    VP: String!
    PTBV: String!
    MakeBuyIntercos: String!
    Supplier: String!
    Country: String!
    Incoterms: String!
    ComponentPurchaseCurrency: String!
    AVInCompPurchCurrency: String!
    ComponentCostAtPurchaseCurrency: String!
    ComponentInCurrency: String!
    FreightInCurrency: String!
    PackagingInCurrency: String!
    DutiesInCurrency: String!
    Target: String!
    CommentsOnPV_PTBVPrice_LTA_AndProductivitiesLifetime: String!
    Total: String!
    product: Product!
    refs: [Reference]
    sops: [Sops]
  }

  type Query {
    boms: [Bom]
    bom(id: ID!): Bom
  }

  type Mutation {
    createBom(input: NewBomInput!): Bom
    updateBom(input: UpdateBomInput!): Bom
    deleteBom(id: ID!): Bom
  }

  input NewBomInput {
    BOM: String!
    Description: String!
    MaterialType: String!
    WeightGrossFilledByPurchasing: String!
    WeightNetFilledByRD: String!
    Material: String!
    MaterialPurchaseCurrency: String!
    MaterialCostInPurchaseCurrency: String!
    VP: String!
    PTBV: String!
    MakeBuyIntercos: String!
    Supplier: String!
    Country: String!
    Incoterms: String!
    ComponentPurchaseCurrency: String!
    AVInCompPurchCurrency: String!
    ComponentCostAtPurchaseCurrency: String!
    ComponentInCurrency: String!
    FreightInCurrency: String!
    PackagingInCurrency: String!
    DutiesInCurrency: String!
    Target: String!
    CommentsOnPV_PTBVPrice_LTA_AndProductivitiesLifetime: String!
    Total: String!
    productId: ID!
  }

  input UpdateBomInput {
    id: ID!
    BOM: String
    Description: String
    MaterialType: String
    WeightGrossFilledByPurchasing: String
    WeightNetFilledByRD: String
    Material: String
    MaterialPurchaseCurrency: String
    MaterialCostInPurchaseCurrency: String
    VP: String
    PTBV: String
    MakeBuyIntercos: String
    Supplier: String
    Country: String
    Incoterms: String
    ComponentPurchaseCurrency: String
    AVInCompPurchCurrency: String
    ComponentCostAtPurchaseCurrency: String
    ComponentInCurrency: String
    FreightInCurrency: String
    PackagingInCurrency: String
    DutiesInCurrency: String
    Target: String
    CommentsOnPV_PTBVPrice_LTA_AndProductivitiesLifetime: String
    Total: String
    productId: ID
  }
`;

const keyInputSopsSchema = `#graphql
  type Sops {
    id: ID!
    value: String!
    bom: Bom!
  }

  type Query {
    sops: [Sops]
    sop(id: ID!): Sops
  }

  type Mutation {
    createSops(input: NewSopsInput!): Sops
    updateSops(input: UpdateSopsInput!): Sops
    deleteSops(id: ID!): Sops
  }

  input NewSopsInput {
    value: String!
    bomId: ID!
  }

  input UpdateSopsInput {
    id: ID!
    value: String
    bomId: ID
  }
`;

const keyInputCustomerSchema = `#graphql
  type Customer {
    id: ID!
    name: String!
    generalInformations: [GeneralInformationsKeyInputs!]!
  }

  type Query {
    customers: [Customer]
    customer(id: ID!): Customer
  }

  type Mutation {
    createCustomer(input: NewCustomerInput!): Customer
    updateCustomer(input: UpdateCustomerInput!): Customer
    deleteCustomer(id: ID!): Customer
  }

  input NewCustomerInput {
    name: String!
  }

  input UpdateCustomerInput {
    id: ID!
    name: String
  }
`;

const keyInputCurrencySchema = `#graphql
  type Currency {
    id: ID!
    name: String!
    generalInformations: [GeneralInformationsKeyInputs]
    keyInputs: [KeyInputs]
  }

  type Query {
    currencies: [Currency]
    currency(id: ID!): Currency
  }

  type Mutation {
    createCurrency(input: NewCurrencyInput!): Currency
    updateCurrency(input: UpdateCurrencyInput!): Currency
    deleteCurrency(id: ID!): Currency
  }

  input NewCurrencyInput {
    name: String!
  }

  input UpdateCurrencyInput {
    id: ID!
    name: String
  }
`;

const keyInputProductSchema = `#graphql
  type Product {
    id: ID!
    name: String!
    references: [Reference]
    boms: [Bom]
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(input: NewProductInput!): Product
    updateProduct(input: UpdateProductInput!): Product
    deleteProduct(id: ID!): Product
  }

  input NewProductInput {
    name: String!
  }

  input UpdateProductInput {
    id: ID!
    name: String
  }
`;

const generalInformationsKeyInputsSchema = `#graphql
  type GeneralInformationsKeyInputs {
    id: ID!
    customerId: ID!
    project: String!
    modelVehicle: String!
    country: String!
    productionSite: String!
    quoteDispatchDate: String!
    firstYearOfCAA: Int!
    firstSopDate: String!
    currencyId: ID!
    keyInputId: ID
    keyInputs: KeyInputs
    customer: Customer!
    currency: Currency!
  }

  type Query {
    generalInformationsKeyInputs: [GeneralInformationsKeyInputs]
    generalInformationsKeyInput(id: ID!): GeneralInformationsKeyInputs
  }

  type Mutation {
    createGeneralInformationsKeyInputs(input: NewGeneralInformationsKeyInputsInput!): GeneralInformationsKeyInputs
    updateGeneralInformationsKeyInputs(input: UpdateGeneralInformationsKeyInputsInput!): GeneralInformationsKeyInputs
    deleteGeneralInformationsKeyInputs(id: ID!): GeneralInformationsKeyInputs
  }

  input NewGeneralInformationsKeyInputsInput {
    customerId: ID!
    project: String!
    modelVehicle: String!
    country: String!
    productionSite: String!
    quoteDispatchDate: String!
    firstYearOfCAA: Int!
    firstSopDate: String!
    currencyId: ID!
  }

  input UpdateGeneralInformationsKeyInputsInput {
    id: ID!
    customerId: ID
    project: String
    modelVehicle: String
    country: String
    productionSite: String
    quoteDispatchDate: String
    firstYearOfCAA: Int
    firstSopDate: String
    currencyId: ID
    keyInputId: ID
  }
`;

const teamKeyInputsSchema = `#graphql
  type TeamKeyInputs {
    id: ID!
    platformManager: String!
    technicalProjectLeader: String!
    purchasingLeader: String!
    processLeader: String!
    financeContributor: String!
    salesLeader: String!
    projectName: String!
    productName: String!
    keyInputId: ID
    keyInputs: KeyInputs
  }

  type Query {
    teamKeyInputs: [TeamKeyInputs]
    teamKeyInput(id: ID!): TeamKeyInputs
  }

  type Mutation {
    createTeamKeyInputs(input: NewTeamKeyInputsInput!): TeamKeyInputs
    updateTeamKeyInputs(input: UpdateTeamKeyInputsInput!): TeamKeyInputs
    deleteTeamKeyInputs(id: ID!): TeamKeyInputs
  }

  input NewTeamKeyInputsInput {
    platformManager: String!
    technicalProjectLeader: String!
    purchasingLeader: String!
    processLeader: String!
    financeContributor: String!
    salesLeader: String!
    projectName: String!
    productName: String!
  }

  input UpdateTeamKeyInputsInput {
    id: ID!
    platformManager: String
    technicalProjectLeader: String
    purchasingLeader: String
    processLeader: String
    financeContributor: String
    salesLeader: String
    projectName: String
    productName: String
    keyInputId: ID
  }
`;

const keyInputSchema = `#graphql
  type KeyInputs {
    id: ID!
    generalInformationsId: ID
    teamId: ID
    currencyId: ID!
    currencyRatesId: ID!
    materialRatesId: ID!
    milestonesId: ID
    refs: [Reference]
    currency: Currency!
    currencyRates: CurrencyRates!
    materialRates: MaterialRates!
    generalInformations: GeneralInformationsKeyInputs
    team: TeamKeyInputs
    milestones: Milestones
  }

  type Query {
    keyInputs: [KeyInputs]
    keyInput(id: ID!): KeyInputs
  }

  type Mutation {
    createKeyInput(input: NewKeyInputsInput!): KeyInputs
    updateKeyInput(input: UpdateKeyInputsInput!): KeyInputs
    deleteKeyInput(id: ID!): KeyInputs
  }

  input NewKeyInputsInput {
    generalInformationsId: ID
    teamId: ID
    currencyId: ID!
    currencyRatesId: ID!
    materialRatesId: ID!
    milestonesId: ID
  }

  input UpdateKeyInputsInput {
    id: ID!
    generalInformationsId: ID
    teamId: ID
    currencyId: ID
    currencyRatesId: ID
    materialRatesId: ID
    milestonesId: ID
  }
`;

const keyInputReferenceSchema = `#graphql
  type Reference {
    id: ID!
    name: String!
    productId: ID!
    product: Product!
    bomId: ID
    bom: Bom
    keyInputsId: ID
    keyInputs: KeyInputs
  }

  type Query {
    references: [Reference]
    reference(id: ID!): Reference
  }

  type Mutation {
    createReference(input: NewReferenceInput!): Reference
    updateReference(input: UpdateReferenceInput!): Reference
    deleteReference(id: ID!): Reference
  }

  input NewReferenceInput {
    name: String!
    productId: ID!
    bomId: ID
    keyInputsId: ID
  }

  input UpdateReferenceInput {
    id: ID!
    name: String
    productId: ID
    bomId: ID
    keyInputsId: ID
  }
`;

const keyInputMilestonesSchema = `#graphql
  type Milestones {
    id: ID!
    npav: String
    caav: String
    prkf: String
    reqf: String
    isd: String
    soco: String
    ffv: String
    efv: String
    desf: String
    iarv: String
    afv: String
    togo: String
    ofto: String
    otop: String
    fdpr: String
    sssr: String
    crar: String
    isva: String
    sopr: String
    sop: String
    prcl: String
    KeyInputs: [KeyInputs]
  }

  type Query {
    milestones: [Milestones]
    milestone(id: ID!): Milestones
  }

  type Mutation {
    createMilestones(input: NewMilestonesInput!): Milestones
    updateMilestones(input: UpdateMilestonesInput!): Milestones
    deleteMilestones(id: ID!): Milestones
  }

  input NewMilestonesInput {
    npav: String
    caav: String
    prkf: String
    reqf: String
    isd: String
    soco: String
    ffv: String
    efv: String
    desf: String
    iarv: String
    afv: String
    togo: String
    ofto: String
    otop: String
    fdpr: String
    sssr: String
    crar: String
    isva: String
    sopr: String
    sop: String
    prcl: String
  }

  input UpdateMilestonesInput {
    id: ID!
    npav: String
    caav: String
    prkf: String
    reqf: String
    isd: String
    soco: String
    ffv: String
    efv: String
    desf: String
    iarv: String
    afv: String
    togo: String
    ofto: String
    otop: String
    fdpr: String
    sssr: String
    crar: String
    isva: String
    sopr: String
    sop: String
    prcl: String
  }
`;

const keyInputCurrencyRatesSchema = `#graphql
  type CurrencyRates {
    id: ID!
    usd: Float
    cny: Float
    thb: Float
    inr: Float
    pln: Float
    jpy: Float
    brl: Float
    rub: Float
    czk: Float
    try: Float
    mrd: Float
    eur: Float
    krw: Float
    ron: Float
    zar: Float
    keyInputs: [KeyInputs]
  }

  type Query {
    currencyRates: [CurrencyRates]
    currencyRate(id: ID!): CurrencyRates
  }

  type Mutation {
    createCurrencyRates(input: NewCurrencyRatesInput!): CurrencyRates
    updateCurrencyRates(input: UpdateCurrencyRatesInput!): CurrencyRates
    deleteCurrencyRates(id: ID!): CurrencyRates
  }

  input NewCurrencyRatesInput {
    usd: Float
    cny: Float
    thb: Float
    inr: Float
    pln: Float
    jpy: Float
    brl: Float
    rub: Float
    czk: Float
    try: Float
    mrd: Float
    eur: Float
    krw: Float
    ron: Float
    zar: Float
  }

  input UpdateCurrencyRatesInput {
    id: ID!
    usd: Float
    cny: Float
    thb: Float
    inr: Float
    pln: Float
    jpy: Float
    brl: Float
    rub: Float
    czk: Float
    try: Float
    mrd: Float
    eur: Float
    krw: Float
    ron: Float
    zar: Float
  }
`;

const keyInputMaterialRatesSchema = `#graphql
  type MaterialRates {
    id: ID!
    aluLME: Float
    aluPremiumYinbang: Float
    aluPremiumAlcha: Float
    aluPremium: Float
    aluMidwestDDU: Float
    aluSHFE: Float
    stampingStockSidePlate: Float
    stampingStockManifolds: Float
    pptv20: Float
    pptv40: Float
    pp54Scolefin: Float
    ppGf30: Float
    pa6Gf30: Float
    pa610: Float
    pa66Gf30: Float
    pa66Gf35: Float
    ppaGf50: Float
    abs: Float
    pom: Float
    tpeShore40: Float
    tpeShore25: Float
    molykoteGrease: Float
    pptv40TpeShore40: Float
    ppC3IndexValue: Float
    keyInputs: [KeyInputs]
  }

  type Query {
    materialRates: [MaterialRates]
    materialRate(id: ID!): MaterialRates
  }

  type Mutation {
    createMaterialRates(input: NewMaterialRatesInput!): MaterialRates
    updateMaterialRates(input: UpdateMaterialRatesInput!): MaterialRates
    deleteMaterialRates(id: ID!): MaterialRates
  }

  input NewMaterialRatesInput {
    aluLME: Float
    aluPremiumYinbang: Float
    aluPremiumAlcha: Float
    aluPremium: Float
    aluMidwestDDU: Float
    aluSHFE: Float
    stampingStockSidePlate: Float
    stampingStockManifolds: Float
    pptv20: Float
    pptv40: Float
    pp54Scolefin: Float
    ppGf30: Float
    pa6Gf30: Float
    pa610: Float
    pa66Gf30: Float
    pa66Gf35: Float
    ppaGf50: Float
    abs: Float
    pom: Float
    tpeShore40: Float
    tpeShore25: Float
    molykoteGrease: Float
    pptv40TpeShore40: Float
    ppC3IndexValue: Float
  }

  input UpdateMaterialRatesInput {
    id: ID!
    aluLME: Float
    aluPremiumYinbang: Float
    aluPremiumAlcha: Float
    aluPremium: Float
    aluMidwestDDU: Float
    aluSHFE: Float
    stampingStockSidePlate: Float
    stampingStockManifolds: Float
    pptv20: Float
    pptv40: Float
    pp54Scolefin: Float
    ppGf30: Float
    pa6Gf30: Float
    pa610: Float
    pa66Gf30: Float
    pa66Gf35: Float
    ppaGf50: Float
    abs: Float
    pom: Float
    tpeShore40: Float
    tpeShore25: Float
    molykoteGrease: Float
    pptv40TpeShore40: Float
    ppC3IndexValue: Float
  }
`;

export {
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
};
