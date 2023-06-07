const addAndSubtract = {
    num1: 6,
    num2: 3,
    add() {
      return (this.num1 + this.num2);
    },
    subtract() {
      return (this.num1 - this.num2);
    },
  }
  const calculator = Object.create(addAndSubtract);
  
  calculator.product = function(){
    return this.num1*this.num2;
  }
  
  calculator.divide = function(){
    return this.num1/this.num2;
  }
  
  