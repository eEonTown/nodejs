"use strict";

const home =  (req, res) => {
    res.render("home/index");
}

const login =  (req, res) => {
    res.render("home/login");
}

// 모듈 내보내기
// Object에서 key만 입력한다면 Value는 key와 동일해짐
module.exports = {
    home,
    login
}