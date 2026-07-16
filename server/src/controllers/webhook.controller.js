import endpointModel from "../models/endpoint.model.js";
import webhookModel from "../models/webhook.model.js";

/**
 * Receive Webhook
 */
export async function receiveWebhook(req, res) {
  const startTime = Date.now();

  try {
    const { path } = req.params;

    // Find endpoint
    const endpoint = await endpointModel.findOne({ path });

    if (!endpoint) {
      return res.status(404).json({
        success: false,
        message: "Endpoint not found",
      });
    }

    if (!endpoint.active) {
      return res.status(400).json({
        success: false,
        message: "Endpoint is disabled",
      });
    }

    // Save webhook request
    const webhook = await webhookModel.create({
      endpoint: endpoint._id,
      method: req.method,
      headers: req.headers,
      body: req.body,
      query: req.query,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      status: 200,
      responseTime: Date.now() - startTime,
    });

    return res.status(200).json({
      success: true,
      message: "Webhook received successfully",
      webhookId: webhook._id,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

/**
 * Get all webhooks of an endpoint
 */
export async function getWebhookHistory(req, res) {
  try {
    const { endpointId } = req.params;

    const endpoint = await endpointModel.findOne({
      _id: endpointId,
      user: req.user.id,
    });

    if (!endpoint) {
      return res.status(404).json({
        success: false,
        message: "Endpoint not found",
      });
    }

    const webhooks = await webhookModel
      .find({ endpoint: endpointId })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: webhooks.length,
      webhooks,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

/**
 * Get single webhook
 */
export async function getWebhookById(req, res) {
  try {
    const { webhookId } = req.params;

    const webhook = await webhookModel
      .findById(webhookId)
      .populate("endpoint");

    if (!webhook) {
      return res.status(404).json({
        success: false,
        message: "Webhook not found",
      });
    }

    // Security check
    if (webhook.endpoint.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      webhook,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}