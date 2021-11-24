const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
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

router.post("/user/playlist", auth, async(req, res) => {
  try{
    // const user = User.findById(req.body.userID);
    const playlist = {_id : req.body.id, song: req.body.name};
    const user = await User.updateOne({_id : req.body.userID}, {$push : {playlist : playlist}});
  }
  catch(err){
    res.status(500).send("Could not add song to playlist");
  }
});

module.exports = router;
