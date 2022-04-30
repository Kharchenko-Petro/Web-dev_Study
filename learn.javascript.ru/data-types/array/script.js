// ------------Завдання----------------------

// Операции с массивами
// важность: 5
// Давайте произведём 5 операций с массивом.
//
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен 
// работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:
//
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// ------------Рішення-----------------------

// const styles = ['Jazz', 'Blues'];
//
// styles.push('Rock-n-Roll');
//
// styles[Math.floor( (styles.length - 1) / 2)] = 'Classic';
//
// alert( styles.shift() );
//
// styles.unshift('Rap', 'Raggy');

// ------------------------------------------

// ------------Завдання----------------------

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// ------------Рішення-----------------------

// function sumInput() {
//   const arrOfNumbers = [];
//   let input = requestNum('Input a number')

//   do {
//     arrOfNumbers.push(input);
//     input = requestNum('Input a number');
//   } while(input);

//   if (arrOfNumbers !== '0') {
//     alert( sumOfNum(arrOfNumbers) );
//   } else {
//     alert('Nothing to summarize');
//   }
// }


// function requestNum(message) {
//   const input = prompt(message, 0);
//   const cancelCond = input === null && input === '';
//   const isNumber = !Object.is(+input, NaN);

//   if (cancelCond) {
//     return false;
//   }
  
//   if (isNumber) {
//     return input;
//   }

//   eturn requestNum('Please type a number');
// }

// function sumOfNum (arr) {
//   let sum = 0;

//   for (number of arr) {
//     sum += +number;
//   }

//   return sum;
// }

// sumInput();return requestNum('Please type a number');
// }

// function sumOfNum (arr) {
//   let sum = 0;

//   for (number of arr) {
//     sum += +number;
//   }

//   return sum;
// }

// sumInput();

// ------------------------------------------

getMaxSubSum(arr) {
  let max = 0;
  let partMax = 0;

  for (item of arr) {
    partMax += item;

    if (max < partMax) {
      max = partMax;
    }

    if (partMax < 0) {
      partMax = 0;
    }
  }

  return max;
}