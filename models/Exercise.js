const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please enter the type of workout, (resistance, cardio, etc..)",
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter the name of workout",
  },
  duration: {
    type: Number,
    required: "Please enter the duration",
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },

  
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
