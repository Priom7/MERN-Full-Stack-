// Importing modules
const fs = require("fs");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Place = require("../models/place");
const mongoose = require("mongoose");

// Fetching Places

const getPlaces = async (req, res, next) => {
  let places;

  try {
    places = await Place.find({})
      .sort({ createdAt: -1 })
      .exec();
  } catch (err) {
    const error = new HttpError(
      "Fetching Places failed, please try again later",
      500
    );
    return next(error);
  }
  res.json({
    places: places.map((place) =>
      place.toObject({ getters: true })
    ),
  });
};

// Fetching Place by Id

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place.",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};

// Creating Place

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid inputs passed, please check your data.",
        422
      )
    );
  }
  const { title, description, choice, check } = req.body;

  const createdPlace = new Place({
    title,
    description,
    choice,
    check,
    image: req.file.path,
  });

  try {
    await createdPlace.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Adding Place failed, please try again later...",
      500
    );
    return next(error);
  }

  res.status(201).json({
    place: createdPlace.toObject({ getters: true }),
  });
};

// Updating Place by Place Id

const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid inputs passed, please check your data.",
        422
      )
    );
  }
  const { title, description, check, choice } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place...",
      500
    );
    return next(error);
  }

  place.title = title;
  place.description = description;
  place.check = check;
  place.choice = choice;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place....",
      500
    );
  }

  res
    .status(200)
    .json({ place: place.toObject({ getters: true }) });
};

// Exporting

exports.getPlaces = getPlaces;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.getPlaceById = getPlaceById;
