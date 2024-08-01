import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const customers = [
    "Fiat Group",
    "BAIC Group",
    "BMW Group",
    "Brillance Jinbei",
    "Byd",
    "Changan Automobile Group",
    "Chery Group",
    "Chrysler Group",
    "Daimler Group",
    "Delphi",
    "Fiat Industrial",
    "Ford Group",
    "Geely",
    "GM Group",
    "Great Wall",
    "Honda",
    "Hyundai Group",
    "Isuzu",
    "Jaguar Land Rover",
    "Jianghuai Automotive",
    "Lifan Automobile",
    "Mahindra Group",
    "Man",
    "Mazda",
    "Mirgor",
    "Mitsubishi Group",
    "Perodua Automotive",
    "Porsche",
    "PSA Group",
    "Renault-Nissan Group",
    "Saic",
    "Other",
  ];

  const currencies = [
    "USD",
    "CNY",
    "THB",
    "INR",
    "PLN",
    "JPY",
    "BRL",
    "RUB",
    "CZK",
    "TRY",
    "MRD",
    "EUR",
    "KRW",
    "RON",
    "ZAR",
  ];

  const products = [
    "Air CAC",
    "Battery Cooler",
    "Brazed Heater Core",
    "Brazed Radiator",
    "CO2 Evaporator",
    "CO2 Gas Cooler",
    "Condenser",
    "ECM",
    "EGR",
    "Evaporator",
    "Fan Systems",
    "Inner Condenser",
    "Mechanical Radiator",
    "Oil Cooler",
    "Other",
    "Plastic Parts",
    "Water CAC",
    "Mechanical Heater Core",
    "Water Chiller",
  ];

  try {
    for (const customer of customers) {
      await prisma.customer.upsert({
        where: { name: customer },
        update: {},
        create: { name: customer },
      });
    }

    for (const currency of currencies) {
      await prisma.currency.upsert({
        where: { name: currency },
        update: {},
        create: { name: currency },
      });
    }

    for (const product of products) {
      await prisma.product.upsert({
        where: { name: product },
        update: {},
        create: { name: product },
      });
    }
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => {
    console.log("Seeding completed.");
  })
  .catch((error) => {
    console.error("Seeding failed: ", error);
  });
