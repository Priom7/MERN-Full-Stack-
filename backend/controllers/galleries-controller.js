// Importing modules
const fs = require("fs");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Gallery = require("../models/gallery");
const mongoose = require("mongoose");

// Fetching Galleries

const getGalleries = async (req, res, next) => {
  let galleries;

  try {
    galleries = await Gallery.find({})
      .sort({ createdAt: -1 })
      .exec();
  } catch (err) {
    const error = new HttpError(
      "Fetching Gallery failed, please try again later",
      500
    );
    return next(error);
  }
  res.json({
    galleries: galleries.map((gallery) =>
      gallery.toObject({ getters: true })
    ),
  });
};

//Creating Galleries

const createGallery = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid inputs passed, please check your data.",
        422
      )
    );
  }

  const createdGallery = new Gallery({
    image: req.file.path,
  });

  if (!createdGallery.image) {
    return next(
      new HttpError(
        "Invalid inputs passed, please check your data.",
        422
      )
    );
  }
  try {
    await createdGallery.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Adding Image failed, please try again later...",
      500
    );
    return next(error);
  }

  res.status(201).json({
    gallery: createdGallery.toObject({ getters: true }),
  });
};

// Exporting

exports.getGalleries = getGalleries;
exports.createGallery = createGallery;
