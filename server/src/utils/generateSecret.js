import crypto from "crypto";

export default function generateSecret() {
    return "whsec_" + crypto.randomBytes(24).toString("hex");
}