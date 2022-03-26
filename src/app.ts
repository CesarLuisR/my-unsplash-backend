import express from "express";
import morgan from "morgan";
import cors from "cors";
import imageRoutes from "./routes/Image";

// init
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/images", imageRoutes);

export default app