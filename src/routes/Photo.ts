import { Router } from "express";
import * as imageController from "../controllers/Photo";

const router = Router();

router.get("/get-photos", imageController.getPhotos);

router.post("/add-photo", imageController.addPhoto);

router.delete("/delete-photo/:id", imageController.deletePhoto);

export default router;
