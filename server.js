import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leaderboardRoutes from "./routes/leaderboard.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/leaderboard", leaderboardRoutes);

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/clickgame";

mongoose.connect(mongoUri)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
});