import supertest from "supertest";
import app from "../../app";
import { describe, it, expect } from "vitest";

describe("Health Route", () => {
    it("should return 200", async () => {
        const response = await supertest(app).get("/health");

        expect(response.status).toBe(200);
    });
});
