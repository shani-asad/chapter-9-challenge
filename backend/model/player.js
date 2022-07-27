const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const playerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    game_name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Player", playerSchema);
