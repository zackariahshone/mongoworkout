const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Workout = new Schema({

    day: {
        type: String,
        default: new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "cannot be empty"
        },
        name: {
            type: String,
            trim: true,
            required: "cannot be empty"
        },
        duration: {
            type: Number,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,

        },
        reps: {
            type: Number,
            trim: true,

        },
        sets: {
            type: Number,
            trim: true,

        },

    }, 
],

})

const Workouts = mongoose.model('Workout', Workout)

module.exports = Workouts;