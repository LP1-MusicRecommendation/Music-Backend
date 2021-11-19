const express = require("express");

const router = new express.Router();

router.post("/auth/login", async (req, res) => {
  try {
    res.send("HELLO");
  } catch (e) {
    console.log("Error: ", e);
    res.status(400);
  }
});

module.exports = router;
