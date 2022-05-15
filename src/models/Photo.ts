import { Schema, model } from "mongoose";

const PhotoSchema = new Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});


export default model("Photo", PhotoSchema);