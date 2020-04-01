const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workSchema = new Schema(
    { type: {
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
}     
)