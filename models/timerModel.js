const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimerSchema = new Schema({
    start: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Timer", TimerSchema);