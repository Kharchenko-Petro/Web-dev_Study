/* for (let i = 2; i <= 10; i += 2) {
    alert(i);
} */

/* let i = 0;

while (i < 3) {
    alert( `number ${i}!` );
    i++;
} */

/* while (true) {
    const userNumber = prompt('Input number', 0);

    if (userNumber > 100 || !userNumber) {
        break;
    } else {
        continue;
    }

} */

let n = prompt('Input your number', 0);
let numbers = [];

if (n < 2) {
    alert('To small!');
}

notANumber:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if ( i % j === 0) {
            continue notANumber;
        } 
    }    

    numbers.push(i);
}

alert(numbers);