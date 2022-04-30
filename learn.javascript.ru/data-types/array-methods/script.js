'use strict'

// Переведите текст вида border-left-width в borderLeftWidth
// https://learn.javascript.ru/task/camelcase

/* function camelize(str) {
  const wordsArr = str.split('-');

  const camelizedStr = wordsArr.reduce( (str, word) => {
    const camelizedWord = word[0].toUpperCase() + word.slice(1);
    
    return str + camelizedWord;
  } );

  return camelizedStr;
}

camelize("background-color") // == 'backgroundColor';
camelize("list-style-image") // == 'listStyleImage';
camelize("-webkit-transition") // == 'WebkitTransition'; */

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// https://learn.javascript.ru/task/filter-range

/* let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  return arr.filter(number => number >= a && number <= b);
} */

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
// и удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// https://learn.javascript.ru/task/filter-range-in-place

/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      continue;
    }

    arr.splice(i, 1);
    i--;
  }
} */

// Сортировать в порядке по убыванию
//https://learn.javascript.ru/task/sort-back

/* let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );

alert(arr); */

// Скопировать и отсортировать массив
// https://learn.javascript.ru/task/copy-sort-array

/* let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  const sortedArr = [...arr].sort( (a, b) => a.localeCompare(b));

  return sortedArr;
} */

// Создать расширяемый калькулятор
// https://learn.javascript.ru/task/calculator-extendable

/* function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.calculate = function(str) {
    const split = str.split(' '),
          a = +split[0],
          b = +split[2],
          op = split[1]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8 */

// Трансформировать в массив имён
// https://learn.javascript.ru/task/array-get-names

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша */

// Трансформировать в объекты
// https://learn.javascript.ru/task/map-objects

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( user => ({
  fullName: `${user.name} ${user.surname}`,
  id: [user.id],
}) );

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин */

// Оставить уникальные элементы массива
// https://learn.javascript.ru/task/array-unique

/* function unique(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

let strings = ["кр", "кр", "хр", "хр",
  "хр", "хр", "кр", "кр", ":-O"
];

console.log( unique(strings) ); */

// Получить средний возраст
// https://learn.javascript.ru/task/average-age

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  return arr.reduce( (sum, obj) => sum + obj.age, 0 ) / arr.length;
} */

// Перемешайте массив
// https://learn.javascript.ru/task/shuffle

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Отсортировать пользователей по возрасту
// https://learn.javascript.ru/task/sort-objects

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

function sortByAge(users) {
  return users.sort( (prevUser, nextUser) => prevUser.age - nextUser.age );
} */