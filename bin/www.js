"use strict";
// 포트번호는 하드코딩이 위험함 변수 할당
const PORT = 3000;

const app = require("../app");

app.listen(PORT, () => {
    console.log("http로 가동된 서버입니다.");
})