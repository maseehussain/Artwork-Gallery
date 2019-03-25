const mongoose = require("mongoose");

const artWorkSchema = mongoose.Schema({
  image: { type: String },
  nameOfWork: { type: String },
  material: { type: String },
  yearCreated: { type: String },
  price: { type: String }
});

module.exports = mongoose.model("Artwork", artWorkSchema);
