"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.getMail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setMail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    User.prototype.getInfo = function () {
        return ("User : ".concat(this.name, " , ").concat(this.email, ", ").concat(this.role));
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return ("la admin");
        }
        else if (this.role === 2) {
            return ("nguoi dung binh thuong");
        }
    };
    return User;
}());
exports.User = User;
