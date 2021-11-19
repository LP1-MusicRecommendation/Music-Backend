const { Decimal128 } = require("bson");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const songSchema = new schema({
  Title: {
    type: String,
    required: true,
  },
  Artist: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  Popularity: {
    type: Number,
    required: true,
  },
});

const Song = mongoose.model("song", songSchema);

module.exports = Song;
