import {z} from "zod";
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
});

export const config = envSchema.parse(process.env);

