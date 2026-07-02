import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createEndpoint,getAllEndpoints,deleteEndpoint,toggleEndpoint } from "../controllers/endpoint.controller.js";

const router = Router();

router.post("/", authMiddleware, createEndpoint);
router.get("/", authMiddleware, getAllEndpoints);

router.delete("/:id", authMiddleware, deleteEndpoint);
router.patch("/:id", authMiddleware, toggleEndpoint);

export default router;