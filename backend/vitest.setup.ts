import {afterAll,beforeAll} from "vitest";
import { db } from "./src/db";

beforeAll(async () => {
    await db.user.deleteMany();
});

afterAll(async () => {
    await db.user.deleteMany();
});

