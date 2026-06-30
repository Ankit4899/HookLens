import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createEndpoint,getAllEndpoints } from "../controllers/endpoint.controller.js";

const router = Router();

router.post("/", authMiddleware, createEndpoint);
router.get("/", authMiddleware, getAllEndpoints);
export default router;