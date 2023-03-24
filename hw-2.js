let a = Number(10);
alert(a);
a = Number(20);
alert(a);

let yearIssue = Number(alert(2007));

let nameCreator  = String(alert(`Brendan Eich`));

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
a = Number(9);
let b = Number(2);
alert(a % b);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = Number(prompt(`Сколько вам лет`));
alert(age);

let user = {
    name: String(`Nguen`),
    age: Number(200),
    isAdmin: Boolean(false)
};

user['city of residence'] = String(`Nga Tranh`);
user[`age`] = 100;
delete user['city of residence'];

let info = prompt(`Какую информацию хотите узнать о пользователе?`);

alert(`${user[info]}`);

let userName = prompt(`Как ваше имя?`);
alert(`Привет,` + userName + `!`)