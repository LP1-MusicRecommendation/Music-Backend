const express = require("express");
const Song = require("../models/song-model");
const auth = require("../auth/auth");
const router = express.Router();

//all songs
router.get("/", auth, async (req, res) => {
  try {
    const songs = await Song.find({});
    res.send(songs);
  } catch (err) {
    res.status(404).send("Could not find songs");
    console.log(err);
  }
});

router.get('/sort/:parameter', auth, async (req, res) => {
    const sort = req.body.sort;
    const parameter = req.params.parameter;
    let song;
    try{
        if(sort == -1){ 
            song = await Song.find().sort({ [parameter] : -1 });
        }
        else{ 
            song = await Song.find().sort({ [parameter] : 1 });
        }
        res.send(song);
    }
    catch(err){
        res.status(404).send("Invalid parameter");
        console.log(err);
    }
});

router.get("/search", auth, async (req, res) => {
  try {
    if (req.body.Title) {
        const song = await Song.findOne({ Title: req.body.Title });
        res.send(song);
    } 
    else if (req.body.Artist) {
        const song = await Song.findOne({ Artist: req.body.Artist });
        res.send(song);
    } 
    else if (req.body.Genre) {
        const song = await Song.find({ Genre: req.body.Genre });
        res.send(song);
    }
    else if(req.body.Year) {
        const song = await Song.find({ Year : req.body.Year});
        res.send(song);
    } 
    else{
      res.redirect("/songs");
    }
  } catch (err) {
    res.status(404).send("Could not find song");
    console.log(err);
  }
});

router.get('/:id', auth, async (req, res) => {
    try{
        const songs = await Song.findById(req.params.id);
        res.send(songs);
    }
    catch(err) {
        res.status(404).send("Could not find songs");
        console.log(err);
    }
})

module.exports = router;
