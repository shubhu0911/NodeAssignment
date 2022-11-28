const mongoose = require("mongoose")
const { Schema } = mongoose;
const studentSchema = new Schema({
    roll: {
        type: Number,
        unique: true,
        allowNull: false,
        trim: true
    },
    name: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        trim: true,
        allowNull: false
    },
    score: {
        type: Number,
        trim: true
    }
});
module.exports = mongoose.model("Student", studentSchema)