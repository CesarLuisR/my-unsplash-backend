import { RequestHandler } from "express";
import Photo from "../models/Photo";

export const getPhotos: RequestHandler = async (req, res) => {
  const photos = await Photo.find();

  try {
    res.status(200).json({
      ok: true,
      photos,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};

export const addPhoto: RequestHandler = async (req, res) => {
  const { label, url } = req.body;

  try {
    const photo = await Photo.create({
      label,
      url
    });

    res.status(200).json({
      ok: true,
      photo,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};

export const deletePhoto: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await Photo.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      photo,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      err,
    });
  }
};
