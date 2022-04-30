/* function Calculator() {
    this.read = function() {
        this.firstNumber = +prompt('Input first number');
        this.secondNumber = +prompt('Input second number');
    }

    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    }    

    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Input number', 0);
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений