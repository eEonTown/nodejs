"use strict";

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login : (req, res) => {
        console.log(req.body);
    }
}

// 모듈 내보내기
// Object에서 key만 입력한다면 Value는 key와 동일해짐
module.exports = {
    output,
    process,
}