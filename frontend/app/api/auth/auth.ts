import { apiClient } from "../client";
import type { LoginRequest, RegisterRequest } from "./types";



export function registerUser(request: RegisterRequest) {
    return apiClient.post("/api/v1/auth/register", request);
}

export function loginUser(request: LoginRequest) {
    return apiClient.post("/api/v1/auth/login", request);
}

