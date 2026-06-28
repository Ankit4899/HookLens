import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createEndpoint } from "../controllers/endpoint.controller.js";

const router = Router();

router.post("/", authMiddleware, createEndpoint);

export default router;