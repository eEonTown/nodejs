"use strict";

// 임의 계정정보
const users = {
    id : ["devadmin", "devadmin2", "devadmin3"],
    pwd : ["1111", "2222", "3333"]
};

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
             pwd = req.body.pwd;
    
        // users.id 배열에 사용자가 입력한 id가 있으면 true 없으면 false반환
        if(users.id.includes(id)) {
            // true반환 후 조건문 실행하면 users.id에 사용자가 입력한 id가 있는 순번을 idx에 할당함
            const idx = users.id.indexOf(id);

            // users.pwd의 idx순번에 사용자가 입력한 pwd가 맞는지 확인 함
            if(users.pwd[idx] === pwd){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패 했습니다."
        })
    }
};

// 모듈 내보내기
// Object에서 key만 입력한다면 Value는 key와 동일해짐
module.exports = {
    output,
    process,
};