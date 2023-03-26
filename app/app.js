"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 정적 경로 지정
app.use(express.static(`${__dirname}/src/public`));

// use : 미들웨어 등록 구문
app.use("/", home);

module.exports = app;