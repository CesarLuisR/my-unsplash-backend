import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


export default model("Image", ImageSchema);