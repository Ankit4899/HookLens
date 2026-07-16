import mongoose from "mongoose";

const webhookSchema = new mongoose.Schema(
  {
    endpoint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Endpoint",
      required: true,
    },

    method: {
      type: String,
      required: true,
    },

    headers: {
      type: Object,
      default: {},
    },

    body: {
      type: Object,
      default: {},
    },

    query: {
      type: Object,
      default: {},
    },

    ip: {
      type: String,
    },

    userAgent: {
      type: String,
    },

    status: {
      type: Number,
      default: 200,
    },

    responseTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const webhookModel = mongoose.model(
  "Webhook",
  webhookSchema
);

export default webhookModel;