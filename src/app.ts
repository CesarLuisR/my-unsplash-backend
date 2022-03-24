import express from "express";
import morgan from "morgan";
import cors from "cors";

// init
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());

// routes

export default app