import supertest from "supertest";
import app from "../../app";
import { describe, it, expect, afterAll, beforeAll } from "vitest";
import { generateRandomEmail, generateRandomPassword } from "../../__test__utils/utils";
import { db } from "../../db";
import { generateToken, hashPassword } from "../../auth/auth";
import { User } from "../../../generated/prisma";

describe("Auth Route", () => {

    let exampleUser: User | null = null;
    let exampleUserToken = "";
    beforeAll(async () => {
        exampleUser = await db.user.create({
            data: {
                email: generateRandomEmail(12),
                password: await hashPassword(generateRandomPassword(8))
            }
        });
        exampleUserToken = await generateToken(exampleUser.id);
    });

    it("should return 401 if user does not provide a token", async () => {
        const response = await supertest(app).get("/api/v1/users/me");
        expect(response.status).toBe(401);
    });
    it("should return 200 and the user if user is authenticated", async () => {
        const response = await supertest(app).get("/api/v1/users/me").set("Authorization", `Bearer ${exampleUserToken}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(exampleUser?.id);
    });
    it("should return 400 if token is invalid", async () => {
        const response = await supertest(app).get("/api/v1/users/me").set("Authorization", `Bearer ${exampleUserToken}123`);
        expect(response.status).toBe(400);
    });
    
    



});
