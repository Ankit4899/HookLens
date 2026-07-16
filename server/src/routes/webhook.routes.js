import { Router } from "express";
import {
  receiveWebhook,
  getWebhookHistory,
  getWebhookById,
} from "../controllers/webhook.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

/**
 * Public webhook receiver
 */
router.post("/:path", receiveWebhook);

/**
 * Protected routes
 */
router.get("/:endpointId", authMiddleware, getWebhookHistory);

router.get("/request/:webhookId", authMiddleware, getWebhookById);

export default router;