const express = require("express");
const userRouter = require("./src/routers/user");
const songRouter = require("./src/routers/songs");
const passport = require("passport");
require("./src/db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(songRouter);
// Add the line below, which you're missing:

module.exports = app;
