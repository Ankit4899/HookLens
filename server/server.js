import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port number:${PORT}`);
})