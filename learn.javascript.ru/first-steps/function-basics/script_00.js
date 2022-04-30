'use strict'

/* function checkAge(age) {
    return (age > 18) || comfirm("Really?");
} */

/* function checkAge(age) {
    return (age > 18) ? true : confirm("Really?");
} */

/* function min(a, b) {
    return (a < b) ? a : b;
} */

const x = +prompt('Input number', '');
const n = +prompt('Input pow', '');

pow(x, n);

function pow(x, n){
    if (checkInteger(n)) {
        return alert(x ** n);
    }
    
    return alert('The value of pow is not supported!');
}

function checkInteger(n) {
    return n > 0;
}