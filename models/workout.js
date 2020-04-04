const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workSchema = new Schema(
    { 
        day: {
            type: Date,
            default: Date.now
        },
    type:  [
        {
      type: String,
      required: "Enter the type of exercise"
    },
    duration: {
        type: Number,
        required: "Enter duration of exercise"
    },
    name: {
        type: String,
        required: "Enter exercise name"
    },
    weight: {
        type: Number  
    },
    reps: {
        type: Number
    },
    reps: {
        type: Number
    }, 
    sets: {
        type:Number
    },
    distance: {
        type: Number
    }
]
}     
)

const Workout = mongoose.model("Workout", workSchema)

module.exports = Workout;