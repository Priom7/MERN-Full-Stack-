const express = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");
const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/", placesControllers.getPlaces);

router.get("/:pid", placesControllers.getPlaceById);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("check").not().isEmpty(),
    check("choice").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("check").not().isEmpty(),
    check("choice").not().isEmpty(),
  ],
  placesControllers.updatePlaceById
);

module.exports = router;
