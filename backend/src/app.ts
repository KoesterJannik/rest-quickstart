import express from "express";

import authRouter from "./routes/auth/auth.router";
import healthRouter from "./routes/health/health.router";
import { errorHandler } from "./middleware/catch-all";
import usersRouter from "./routes/users/users.router";
import cors from "cors";
import { config } from "./config";
const app = express();
const API_PREFIX = "/api/v1";

app.use(express.json());
console.log(config.ALLOWED_ORIGIN);
app.use(
  cors({
    origin: [config.ALLOWED_ORIGIN],
  }),
);

app.use("/health", healthRouter);
app.use(API_PREFIX + "/auth", authRouter);
app.use(API_PREFIX + "/users", usersRouter);
app.use(errorHandler);

export default app;
