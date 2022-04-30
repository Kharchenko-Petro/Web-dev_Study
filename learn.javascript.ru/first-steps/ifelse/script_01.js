/* const number = prompt('Введіть число, будь ласка.', '');

if (+number === 0) {
    alert('0');
} else if (+number > 0) {
    alert('1');
} else {
    alert('-1');
} */

/* const a = 1;
const b = 2;
const result = (a + b < 4) ? 'Мало' : 'Багато'; */

const login = prompt('Login?', '');
let message;

message = (login == 'Сотрудник') ? 'Привет'
    : (login == 'Директор') ? 'Здравствуйте'
    : (login == '') ? 'Нет логина'
    : '';

alert(message);