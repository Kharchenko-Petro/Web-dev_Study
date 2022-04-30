// Сделать первый символ заглавным
//
// Напишите функцию ucFirst(str), 
// возвращающую строку str с заглавным первым символом. 
// Например:
// ucFirst("вася") == "Вася";

ucFirst("вася") == "Вася";
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Проверка на спам
//
// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.
// 
// Функция должна быть нечувствительна к регистру:
//   checkSpam('buy ViAgRA now') == true
//   checkSpam('free xxxxx') == true
//   checkSpam("innocent rabbit") == false

function checkSpam(str) {
  const string = str.toLowerCase();
  return string.includes('viagra') ||  string.includes('xxx');
}

/* alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") ); */

// Усечение строки
// 
// Создайте функцию truncate(str, maxlength), 
// которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет 
// конец str на "…", так, чтобы её длина 
// стала равна maxlength.
// 
// Результатом функции должна быть та же строка, 
// если усечение не требуется, либо, 
// если необходимо, усечённая строка.
// 
// Например:
// 
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    alert(str);
  } else {
    alert( str.slice(0, maxlength - 1) + '…' );
  }
}

/* truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20); */

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". 
// То есть сначала идёт знак валюты, а затем – число.
//
// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять 
// числовое значение и возвращать его.
//
// Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  const numberReg = /\d+/;

  return +str.match(numberReg);
}

/* alert( extractCurrencyValue('$120') === 120 ); */