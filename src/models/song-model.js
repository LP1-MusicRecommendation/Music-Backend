const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const songSchema = new schema({
    AlbumID : {
        // type : Number,
        type : String,
        required : true
    },
    AlbumName : {
        type : String,
        required : true
    },
    ArtistName : {
        type : String,
        required : true
    },
    Duration : {
        // type : Decimal128,
        type : String,
        required : true
    },
    Title : {
        type : String,
        required : true
    },
    Year : {
        // type : Number,
        type : String,
        required : true
    }
    // },
    // Category : {
    //     type : String,
    //     required : true
    // }
});

const Song = mongoose.model('Song', songSchema, 'Songs'); // only checks lower case pluralized names

module.exports = Song;
