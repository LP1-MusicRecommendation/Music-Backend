const express = require("express");

const router = new express.Router();

router.post("/songs", async (req, res) => {
  try {
    res.send("HELLO WORLD");
  } catch (e) {
    console.log("Error: ", e);
    res.status(400);
  }
});

router.post("/songs/create", async (req, res) => {
  try {
    res.send("WORLD");
  } catch (e) {
    console.log("Error: ", e);
    res.status(400);
  }
});

module.exports = router;
