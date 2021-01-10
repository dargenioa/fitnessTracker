const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
  totalDuration: {
    type: Number

  }
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
