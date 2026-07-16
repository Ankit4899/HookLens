import api from "../api/axios";

// Get all webhook requests for an endpoint
export const getWebhookHistory = async (endpointId) => {
  const res = await api.get(`/webhooks/${endpointId}`);
  return res.data;
};

// Get a single webhook
export const getWebhookById = async (webhookId) => {
  const res = await api.get(`/webhooks/request/${webhookId}`);
  return res.data;
};