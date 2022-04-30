'use strict'

/* if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === ('Chrome' || 'Firefox' || 'Safari' || 'Opera')) {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
} */


const number = +prompt('Input number between 0 and 3', '');

switch (number) {
    case 0:
        alert('You input number 0');
        break;
    
    case 1:
        alert('You input number 1', '');
        break;

    case 2:
    case 3:
        alert('You input number 2 or 3', '');
        break;
}