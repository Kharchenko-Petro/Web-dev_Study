/* let age = 10;

if (age > 90 && age < 14) {
    ;
}

if ( !(age >= 90 && age <= 14)) {
    ;
} */

const login = prompt('Input your login', '');

if (login == 'Admin') {
    const password = prompt('Input your password');
    
    if (password == 'I am the boss') {

        alert('Hello');

    } else if (!password) {

        alert('Canceled');

    } else {

        alert('Wrong password');
    }

} else if (!login) {

    alert('Canceled');

} else {

    alert('I dont know you');

}