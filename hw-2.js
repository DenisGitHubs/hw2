let a = 10;
alert(a);
a = 20;
alert(a);

let yearIssue = alert(2007);

let nameCreator  = alert("Brendan Eich");

let firstNumber = Number(10);
let secondNumber = Number(2);
let sym = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let productNumbers = firstNumber * secondNumber;
let divisionNumbers = firstNumber / secondNumber;
alert(sym);
alert(difference);
alert(productNumbers);
alert(divisionNumbers);
a = 9;
let b = 2;
alert(a % b);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt(`Сколько вам лет?`);
alert(age);

let user = {
    name: "Nguen",
    age: 200,
    isAdmin: false
};

user['city of residence'] = "Nga Tranh";
user[`age`] = 100;
delete user['city of residence'];

let info = prompt(`Какую информацию хотите узнать о пользователе?`);

alert(`${user[info]}`);

let userName = prompt("Как ваше имя?");
alert(`Привет, ` + userName + `!`)