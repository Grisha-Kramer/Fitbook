const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    unique: false,
    default: Date.now,
  },
  exercises: [
    {
      _id: false,
      type: { type: String },
      name: { type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
  totalDuration: Number
});

WorkoutSchema.methods.setDate = function () {
  this.day = new Date().setDate(new Date.now())
  return this.day
}

WorkoutSchema.methods.setTotalDuration = function() {
  let total = 0
  for (let i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration
    this.totalDuration = total
    return this.totalDuration
  }
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
