function registerUser(users, string) {
    if (!string.endsWith("@gmail.com")) {
        return `Email khong hop le`;
    }
    if (users.includes(string)) {
        return `Tai khoan da ton tai`;
    }
    users.push(string);
    return `Dang ky thanh cong!`;
}
let users = [];
console.log(registerUser(users, `sondao0205@gmail.com`));
console.log(users);
console.log(registerUser(users, `sondao0205@gmail.com`));
console.log(registerUser(users, `sondao0205`));
