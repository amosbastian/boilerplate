import "reflect-metadata";
import "dotenv/config";

const globalSetup = async (): Promise<void> => {
  if (
    process.env.DATABASE_URL &&
    !(process.env.DATABASE_URL.includes("localhost") || process.env.DATABASE_URL.includes("127.0.0.1"))
  ) {
    throw new Error("It seems you are going to run test on a production database, please check DATABASE_URL");
  }
};

export default globalSetup;
