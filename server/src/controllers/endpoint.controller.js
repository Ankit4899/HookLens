import endpointModel from "../models/endpoint.model.js";
import generateEndpointPath from "../utils/generateEndpointPath.js";
import generateSecret from "../utils/generateSecret.js";
import config from "../config/config.js";

export async function createEndpoint(req, res) {
    try {
        const { name, provider, description } = req.body;

        const endpoint = await endpointModel.create({
            user: req.user.id,
            name,
            provider,
            description,
            path: generateEndpointPath(),
            secret: generateSecret(),
        });

        res.status(201).json({
            success: true,
            message: "Endpoint created successfully",
            endpoint: {
                ...endpoint.toObject(),
                webhookUrl: `${config.BASE_URL}/api/webhooks/${endpoint.path}`,
            },
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Failed to create endpoint",
        });
    }
}

export async function getAllEndpoints(req, res) {
    try {
        const endpoints = await endpointModel
            .find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: endpoints.length,
            endpoints,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch endpoints",
        });
    }
}