//chalk

const chalk = require('chalk');
const validator=require('validator');

console.log(chalk.blue.underline.inverse("smit donga"));

var mail=validator.isEmail("smit@gmail");
console.log(mail ? chalk.green("email is right") : chalk.red("email is wrong"));
