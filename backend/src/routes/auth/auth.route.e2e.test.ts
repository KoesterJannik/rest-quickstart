import supertest from "supertest";
import app from "../../app";
import { describe, it, expect, afterAll } from "vitest";
import { generateRandomEmail, generateRandomPassword } from "../../__test__utils/utils";
import { db } from "../../db";
import { hashPassword } from "../../auth/auth";

describe("Auth Route", () => {
    it("should return 400 because password is not 8 characters long", async () => {
        
        const payload = {
            email: generateRandomEmail(12),
            password: generateRandomPassword(7)
        }
        const response = await supertest(app).post("/api/v1/auth/register").send(payload);

        expect(response.status).toBe(400);
    });
    it("should return 400 if email or password are missing", async () => {
        const payload = {
            email: generateRandomEmail(12)
        }
        const response = await supertest(app).post("/api/v1/auth/register").send(payload);
        expect(response.status).toBe(400);
    });
    it("should return 400 if email is not valid", async () => {
        const payload = {
            email: "invalid-email",
            password: generateRandomPassword(8)
        }
        const response = await supertest(app).post("/api/v1/auth/register").send(payload);
        expect(response.status).toBe(400);
    });

    it("should return 201 and with the key access_token", async () => {
        const payload = {
            email: generateRandomEmail(12),
            password: generateRandomPassword(8)
        }
        const response = await supertest(app).post("/api/v1/auth/register").send(payload);
        expect(response.status).toBe(201);
        expect(response.body.access_token).toBeDefined();
    });

    it("should return 400 if email is already in use", async () => {
        const payload = {
            email: generateRandomEmail(16),
            password: generateRandomPassword(8)
        }
        await db.user.create({
            data: {
                email: payload.email,
                password: payload.password
            }
        });
        const response = await supertest(app).post("/api/v1/auth/register").send(payload);
        expect(response.status).toBe(400);
    });

    // Login endpoint tests
    it("should return 400 if login email or password are missing", async () => {
        const payload = {
            email: generateRandomEmail(12)
        }
        const response = await supertest(app).post("/api/v1/auth/login").send(payload);
        expect(response.status).toBe(400);
    });

    it("should return 400 if login email is not valid", async () => {
        const payload = {
            email: "invalid-email",
            password: generateRandomPassword(8)
        }
        const response = await supertest(app).post("/api/v1/auth/login").send(payload);
        expect(response.status).toBe(400);
    });

    it("should return 400 if credentials are invalid (user not found)", async () => {
        const payload = {
            email: generateRandomEmail(12),
            password: generateRandomPassword(8)
        }
        const response = await supertest(app).post("/api/v1/auth/login").send(payload);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Invalid credentials");
    });

    it("should return 400 if password is incorrect", async () => {
        // Create a user first
        const email = generateRandomEmail(12);
        const password = generateRandomPassword(10);
        
        await db.user.create({
            data: {
                email,
                password
            }
        });
        
        // Try to login with wrong password
        const response = await supertest(app).post("/api/v1/auth/login").send({
            email,
            password: "wrong-password-123"
        });
        
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Invalid credentials");
    });

    it("should return 200 and access_token for valid credentials", async () => {
        // Create a user first
        const email = generateRandomEmail(12);
        const password = generateRandomPassword(10);
        
        await db.user.create({
            data: {
                email,
                password:await hashPassword(password)
            }
        });
        
        // Try to login with correct credentials
        const response = await supertest(app).post("/api/v1/auth/login").send({
            email,
            password
        });
        
        expect(response.status).toBe(200);
        expect(response.body.access_token).toBeDefined();
        expect(response.body.message).toBe("Login successful");
    });

  
});
