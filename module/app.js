//menggunakan tanda ../ untuk keluar dari satu level folder. Ini
//example: const coffee = require('../lib/coffee');

const coffee = require("./coffee");
const {firstName, lastName }= require("./user");

console.log(coffee)

console.log(firstName);
console.log(lastName);
