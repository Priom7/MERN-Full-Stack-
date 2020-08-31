const express = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");
const galleriesControllers = require("../controllers/galleries-controller");

const router = express.Router();

router.get("/", galleriesControllers.getGalleries);

router.post(
  "/",
  fileUpload.single("image"),
  galleriesControllers.createGallery
);

module.exports = router;
