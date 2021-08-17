import "reflect-metadata";
import "dotenv/config";

const globalSetup = async (): Promise<void> => {
  if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost")) {
    throw new Error("It seems you are going to run test on a production database, please check DATABASE_URL");
  }
};

export default globalSetup;
