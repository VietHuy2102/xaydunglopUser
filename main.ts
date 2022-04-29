import {User} from "./xaydunglopUser";
let user1 = new User(`Huy`, `Huy@gmail.com`, 1)
let user2 = new User(`uyen`, `Uyen@gmail.com`, 2)
console.log(user1.getInfo())
console.log(user2.getInfo())
console.log(user1.isAdmin())
console.log(user2.isAdmin())