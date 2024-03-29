const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    description:{
        type: String,
    },

    image:{
        type: String,
    }

});

const Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;