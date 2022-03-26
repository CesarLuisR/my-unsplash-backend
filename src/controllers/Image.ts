import { RequestHandler } from "express";
import Image from "../models/Image";
import { comparePassword, encryptPassword } from "../utils/password";

export const getImages: RequestHandler = async (req, res) => {
  const images = await Image.find();

  try {
    res.status(200).json({
      ok: true,
      images,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};

export const addImage: RequestHandler = async (req, res) => {
  const { label, url, password } = req.body;

  try {
    const image = await Image.create({
      label,
      url,
      password: encryptPassword(password),
    });

    res.status(200).json({
      ok: true,
      image,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};

export const deleteImage: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByIdAndDelete(id);

    if (!comparePassword(req.body.password, image.password)) return;

    res.status(200).json({
      ok: true,
      image,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};
