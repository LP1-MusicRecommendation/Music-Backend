const express = require("express");
const userRouter = require("./src/routers/user");
const songRouter = require('./src/routers/songs');
require("./src/db/mongoose");

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(userRouter);
app.use('/songs', songRouter);

module.exports = app;
