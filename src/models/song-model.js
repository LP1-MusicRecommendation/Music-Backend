const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const songSchema = new schema({
    AlbumID : {
        type : Number,
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
        type : Decimal128,
        required : true
    },
    Title : {
        type : String,
        required : true
    },
    Year : {
        type : Number,
        required : true
    },
    Category : {
        type : String,
        required : true
    }
});

const Song = mongoose.model('song', songSchema);

module.exports = Song;
