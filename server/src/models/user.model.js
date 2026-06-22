import mongoose from "mongoose";

/**
 * User Schema :- username email password 
 */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, "Username is required" ],
        unique: [ true, "Username must be unique" ]
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
        unique: [ true, "Email must be unique" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ]
    }
})

/**
 * user model
 */
const userModel = mongoose.model("users", userSchema)

export default userModel;