export class User {
    protected name: string;
    protected email: string;
    protected role: number


    constructor(name: string,
                email: string,
                role: 1 | 2) {

        this.name = name;
        this.email = email;
        this.role = role;
    }

    getRole() {
        return this.role;
    }

    getMail() {
        return this.email;
    }

    getName() {
        return this.name;
    }
    setName(name: string):void{
        this.name = name;
    }
    setMail(email:string):void{
        this.email = email;
    }
    setRole(role: number):any{
        this.role = role;
    }

    getInfo() {
        return (`User : ${this.name} , ${this.email}, ${this.role}`)
    }
    isAdmin(){
        if (this.role===1){
            return(`la admin`)
        }
        else if (this.role===2){
            return (`nguoi dung binh thuong`)
        }
    }
}





