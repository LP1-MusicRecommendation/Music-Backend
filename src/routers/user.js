const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const Song = require("../models/song-model");
const auth = require("../auth/auth");

router.post("/user/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("Logged out succesfully");
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/user/addtoplaylist", auth, async (req, res) => {
  try {
    const playlist = await Song.findOne({ _id: req.body.id });
    console.log(playlist);
    const user = await User.updateOne(
      { email: req.body.email },
      { $push: { playlist: playlist } }
    );
    res.status(201).send("Song added successfully");
  } catch (err) {
    res.status(500).send("Could not add song to playlist");
  }
});

router.post("/user/playlist", auth, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(201).send(user.playlist);
  } catch (err) {
    res.status(500).send("Cannot display playlist");
  }
});

module.exports = router;
