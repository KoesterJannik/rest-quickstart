import { z } from "zod";
import dotenv from "dotenv";
let file = "";
switch (process.env.NODE_ENV) {
  case "test":
    file = ".env.test";
    break;
  case "development":
    file = ".env.development";
    break;
  default:
    file = ".env";
    break;
}
console.log(`Loaded ${file} file`);
console.log(process.env.NODE_ENV);
dotenv.config({ path: file });

const envSchema = z.object({
  NODE_ENV: z.enum(["test", "development", "production"]),
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN_MS: z.coerce.number(),
  BCRYPT_SALT_ROUNDS: z.coerce.number(),
  ALLOWED_ORIGIN: z.string(),
});

export const config = envSchema.parse(process.env);
