const express = require('express')
const Song = require('../models/song-model')

const router = express.Router();


//all songs
router.get('/', auth ,async (req, res) => {
    try{
        const songs = await Song.find({});
        res.send(songs)
    }
    catch(err){
        res.statusCode(404).send('Could not find songs')
        console.log(err)
    }
})

router.get('/search', auth, async (req, res) => {
    
    try{
        if(req.body.title)
        {
            const song = await Song.findOne({ title : req.body.title });
            res.send(song);
        }
        else if(req.body.artistName)
        {
            const song = await Song.findOne({ ArtistName : req.body.artistName});
            res.send(song);
        }
        else if(req.body.category)
        {
            const song = await Song.find({ Category : req.body.category });
            res.send(song);
        }
        else{
            res.redirect('/songs');
        }
    }
    catch(err){
        res.statusCode(404).send('Could not find song')
        console.log(err)
    }
})


module.exports = router
