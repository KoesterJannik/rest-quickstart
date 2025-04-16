import { PrismaClient } from "@prisma/client";
import { config } from "./config";

console.log("Loaded DATABASE_URL", config.DATABASE_URL);
export const db = new PrismaClient({
  datasources: {
    db: {
      url: config.DATABASE_URL,
    },
  },
});




