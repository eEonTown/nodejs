"use strict";

class UserStorage {
    // 임의 계정정보
    // # : 은닉화 private
    static #users = {
        id : ["devadmin", "devadmin2", "devadmin3"],
        pwd : ["1111", "2222", "3333"]
    };

    static getUsers(...fields){
        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }

            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;