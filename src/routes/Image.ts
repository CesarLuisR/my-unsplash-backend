import { Router } from "express";
import * as imageController from "../controllers/Image";

const router = Router();

router.get("/get-images", imageController.getImages);

router.post("/add-image", imageController.addImage);

router.delete("/delete-image/:id", imageController.deleteImage);

export default router;
