const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const SchemeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  type: {
    type: Number,
    default: 0,
  },
  eligibilityIncome: {
    type: Number,
    default: "1000000000",
  },
  eligibilityCaste: {
    type: Number,
    required: true,
  },
  state: {
    type: Number,
    required: true,
    trim: true,
  },
  eligibilityAgeUpperBound: {
    type: Number,
    required: true,
  },
  eligibilityAgeLowerBound: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  gender: {
    type: Number,
    require: true,
    default: 0,
  },
  url: {
    type: String,
    default: "null",
  },
  author: {
    type: String,
    required: true,
  },
  males: {
    type: Number,
    default: 0,
  },
  females: {
    type: Number,
    default: 0,
  },
  trans: {
    type: Number,
    default: 0,
  },
  other: {
    type: Number,
    default: 0,
  },
  gen: {
    type: Number,
    default: 0,
  },
  obc: {
    type: Number,
    default: 0,
  },
  stSc: {
    type: Number,
    default: 0,
  },
});

const Schemes = mongoose.model("Scheme", SchemeSchema);
module.exports = Schemes;
