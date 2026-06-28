import crypto from "crypto";

export default function generateEndpointPath(length = 12) {
    return crypto.randomBytes(length).toString("hex");
}