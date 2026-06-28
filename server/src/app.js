// import express from 'express';
// import morgan from 'morgan';
// import authRouter from './routes/auth.routes.js';
// import cookieParser from 'cookie-parser';

// const app = express();


// app.use(express.json());
// app.use(morgan("dev"));// used as a logger middleware
// app.use(cookieParser());


// app.use("/api/auth", authRouter);


// export default app;

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import endpointRouter from "./routes/endpoint.routes.js";

import authRouter from "./routes/auth.routes.js";

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

export default app;