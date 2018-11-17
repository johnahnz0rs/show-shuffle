const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelSchema = new mongoose.Schema({
    fname: {type: String, trim: true},
    lname: {type: String, trim: true},
    email: {type: String, trim: true},
    password: {type: String, trim: true},
    misc: {type: String, trim: true},
}, {timestamps: true});

mongoose.model('model', modelSchema);
const model = mongoose.model('model');

module.exports = model;