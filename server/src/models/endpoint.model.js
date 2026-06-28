import mongoose from "mongoose";

const endpointSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        provider: {
            type: String,
            enum: [
                "stripe",
                "github",
                "razorpay",
                "clerk",
                "resend",
                "custom",
            ],
            default: "custom",
        },

        description: {
            type: String,
            default: "",
        },

        path: {
            type: String,
            unique: true,
            required: true,
        },

        secret: {
            type: String,
            required: true,
        },

        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Endpoint", endpointSchema);