let calculator = {
    read() {
        this.firstNumber = +prompt("Input first number", "");
        this.secondNumber = +prompt("Input second number", "");
    },

    sum() {
        return (this.firstNumber + this.secondNumber);
    },

    mul(){
        return ( this.firstNumber * this.secondNumber);
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );