import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
