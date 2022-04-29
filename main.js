"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xaydunglopUser_1 = require("./xaydunglopUser");
var user1 = new xaydunglopUser_1.User("Huy", "Huy@gmail.com", 1);
var user2 = new xaydunglopUser_1.User("uyen", "Uyen@gmail.com", 2);
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user1.isAdmin());
console.log(user2.isAdmin());
