import express from "express";

import authRouter from "./routes/auth/auth.router";
import healthRouter from "./routes/health/health.router";
const app = express();
const API_PREFIX = "/api/v1";

app.use(express.json());


app.use("/health", healthRouter);
app.use(API_PREFIX, authRouter);


export default app;


