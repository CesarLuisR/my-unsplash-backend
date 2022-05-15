import express from "express";
import morgan from "morgan";
import cors from "cors";
import imageRoutes from "./routes/Photo";

// init
const app = express();

// settings
app.set("port", process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use("/api/photos", imageRoutes);

export default app;
