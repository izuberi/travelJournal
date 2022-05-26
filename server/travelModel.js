const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    location: {type: String, required: true}, 
    keySites: {type: Array},
    date: {type: String, required: true},
});

// mongoose.model(modelName, schema)
module.exports = mongoose.model('Travel',TravelSchema);