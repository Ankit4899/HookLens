import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import endpointRouter from "./routes/endpoint.routes.js";
import webhookRouter from "./routes/webhook.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", authRouter);

app.use("/api/endpoints", endpointRouter);

app.use("/api/webhooks", webhookRouter);

export default app;