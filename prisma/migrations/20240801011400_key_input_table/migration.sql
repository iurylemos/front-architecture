-- CreateTable
CREATE TABLE "Bom" (
    "id" SERIAL NOT NULL,
    "BOM" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "MaterialType" TEXT NOT NULL,
    "WeightGrossFilledByPurchasing" TEXT NOT NULL,
    "WeightNetFilledByRD" TEXT NOT NULL,
    "Material" TEXT NOT NULL,
    "MaterialPurchaseCurrency" TEXT NOT NULL,
    "MaterialCostInPurchaseCurrency" TEXT NOT NULL,
    "VP" TEXT NOT NULL,
    "PTBV" TEXT NOT NULL,
    "MakeBuyIntercos" TEXT NOT NULL,
    "Supplier" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Incoterms" TEXT NOT NULL,
    "ComponentPurchaseCurrency" TEXT NOT NULL,
    "AVInCompPurchCurrency" TEXT NOT NULL,
    "ComponentCostAtPurchaseCurrency" TEXT NOT NULL,
    "ComponentInCurrency" TEXT NOT NULL,
    "FreightInCurrency" TEXT NOT NULL,
    "PackagingInCurrency" TEXT NOT NULL,
    "DutiesInCurrency" TEXT NOT NULL,
    "Target" TEXT NOT NULL,
    "CommentsOnPV_PTBVPrice_LTA_AndProductivitiesLifetime" TEXT NOT NULL,
    "Total" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Bom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sops" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "bomId" INTEGER NOT NULL,

    CONSTRAINT "Sops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralInformationsKeyInputs" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "project" TEXT NOT NULL,
    "modelVehicle" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "productionSite" TEXT NOT NULL,
    "quoteDispatchDate" TIMESTAMP(3) NOT NULL,
    "firstYearOfCAA" INTEGER NOT NULL,
    "firstSopDate" TIMESTAMP(3) NOT NULL,
    "currencyId" INTEGER NOT NULL,
    "keyInputId" INTEGER,

    CONSTRAINT "GeneralInformationsKeyInputs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamKeyInputs" (
    "id" SERIAL NOT NULL,
    "platformManager" TEXT NOT NULL,
    "technicalProjectLeader" TEXT NOT NULL,
    "purchasingLeader" TEXT NOT NULL,
    "processLeader" TEXT NOT NULL,
    "financeContributor" TEXT NOT NULL,
    "salesLeader" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "keyInputId" INTEGER,

    CONSTRAINT "TeamKeyInputs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyInputs" (
    "id" SERIAL NOT NULL,
    "generalInformationsId" INTEGER,
    "teamId" INTEGER,
    "currencyId" INTEGER NOT NULL,
    "currencyRatesId" INTEGER NOT NULL,
    "materialRatesId" INTEGER NOT NULL,
    "milestonesId" INTEGER,

    CONSTRAINT "KeyInputs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "bomId" INTEGER,
    "keyInputsId" INTEGER,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestones" (
    "id" SERIAL NOT NULL,
    "npav" TIMESTAMP(3),
    "caav" TIMESTAMP(3),
    "prkf" TIMESTAMP(3),
    "reqf" TIMESTAMP(3),
    "isd" TIMESTAMP(3),
    "soco" TIMESTAMP(3),
    "ffv" TIMESTAMP(3),
    "efv" TIMESTAMP(3),
    "desf" TIMESTAMP(3),
    "iarv" TIMESTAMP(3),
    "afv" TIMESTAMP(3),
    "togo" TIMESTAMP(3),
    "ofto" TIMESTAMP(3),
    "otop" TIMESTAMP(3),
    "fdpr" TIMESTAMP(3),
    "sssr" TIMESTAMP(3),
    "crar" TIMESTAMP(3),
    "isva" TIMESTAMP(3),
    "sopr" TIMESTAMP(3),
    "sop" TIMESTAMP(3),
    "prcl" TIMESTAMP(3),

    CONSTRAINT "Milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrencyRates" (
    "id" SERIAL NOT NULL,
    "usd" DOUBLE PRECISION,
    "cny" DOUBLE PRECISION,
    "thb" DOUBLE PRECISION,
    "inr" DOUBLE PRECISION,
    "pln" DOUBLE PRECISION,
    "jpy" DOUBLE PRECISION,
    "brl" DOUBLE PRECISION,
    "rub" DOUBLE PRECISION,
    "czk" DOUBLE PRECISION,
    "try" DOUBLE PRECISION,
    "mrd" DOUBLE PRECISION,
    "eur" DOUBLE PRECISION,
    "krw" DOUBLE PRECISION,
    "ron" DOUBLE PRECISION,
    "zar" DOUBLE PRECISION,

    CONSTRAINT "CurrencyRates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialRates" (
    "id" SERIAL NOT NULL,
    "aluLME" DOUBLE PRECISION,
    "aluPremiumYinbang" DOUBLE PRECISION,
    "aluPremiumAlcha" DOUBLE PRECISION,
    "aluPremium" DOUBLE PRECISION,
    "aluMidwestDDU" DOUBLE PRECISION,
    "aluSHFE" DOUBLE PRECISION,
    "stampingStockSidePlate" DOUBLE PRECISION,
    "stampingStockManifolds" DOUBLE PRECISION,
    "pptv20" DOUBLE PRECISION,
    "pptv40" DOUBLE PRECISION,
    "pp54Scolefin" DOUBLE PRECISION,
    "ppGf30" DOUBLE PRECISION,
    "pa6Gf30" DOUBLE PRECISION,
    "pa610" DOUBLE PRECISION,
    "pa66Gf30" DOUBLE PRECISION,
    "pa66Gf35" DOUBLE PRECISION,
    "ppaGf50" DOUBLE PRECISION,
    "abs" DOUBLE PRECISION,
    "pom" DOUBLE PRECISION,
    "tpeShore40" DOUBLE PRECISION,
    "tpeShore25" DOUBLE PRECISION,
    "molykoteGrease" DOUBLE PRECISION,
    "pptv40TpeShore40" DOUBLE PRECISION,
    "ppC3IndexValue" DOUBLE PRECISION,

    CONSTRAINT "MaterialRates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_product_id" ON "Bom"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_name_key" ON "Currency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GeneralInformationsKeyInputs_keyInputId_key" ON "GeneralInformationsKeyInputs"("keyInputId");

-- CreateIndex
CREATE UNIQUE INDEX "GeneralInformationsKeyInputs_customerId_project_key" ON "GeneralInformationsKeyInputs"("customerId", "project");

-- CreateIndex
CREATE UNIQUE INDEX "TeamKeyInputs_keyInputId_key" ON "TeamKeyInputs"("keyInputId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamKeyInputs_platformManager_technicalProjectLeader_projec_key" ON "TeamKeyInputs"("platformManager", "technicalProjectLeader", "projectName");

-- CreateIndex
CREATE UNIQUE INDEX "KeyInputs_generalInformationsId_key" ON "KeyInputs"("generalInformationsId");

-- CreateIndex
CREATE UNIQUE INDEX "KeyInputs_teamId_key" ON "KeyInputs"("teamId");

-- AddForeignKey
ALTER TABLE "Bom" ADD CONSTRAINT "Bom_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sops" ADD CONSTRAINT "Sops_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "Bom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInformationsKeyInputs" ADD CONSTRAINT "GeneralInformationsKeyInputs_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInformationsKeyInputs" ADD CONSTRAINT "GeneralInformationsKeyInputs_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_currencyRatesId_fkey" FOREIGN KEY ("currencyRatesId") REFERENCES "CurrencyRates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_materialRatesId_fkey" FOREIGN KEY ("materialRatesId") REFERENCES "MaterialRates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_generalInformationsId_fkey" FOREIGN KEY ("generalInformationsId") REFERENCES "GeneralInformationsKeyInputs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TeamKeyInputs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyInputs" ADD CONSTRAINT "KeyInputs_milestonesId_fkey" FOREIGN KEY ("milestonesId") REFERENCES "Milestones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "Bom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_keyInputsId_fkey" FOREIGN KEY ("keyInputsId") REFERENCES "KeyInputs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
