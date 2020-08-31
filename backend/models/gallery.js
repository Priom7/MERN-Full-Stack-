// Importing modules

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Gallery", gallerySchema);
