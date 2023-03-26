"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home)

router.get("/login", ctrl.login)

// 모듈 내보내기
// app.js에서 미들웨어로 등록 후 불러올 예정
module.exports = router;