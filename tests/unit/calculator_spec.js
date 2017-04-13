var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
    calculator.clearClick();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });
  it('multiply 3x5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  });
  it('divide 21/7 and get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  });
  it('should add two numbers together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  });
  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);    
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal,1337);
  })






  // - calculator.add()
  // - calculator.subtract()
  // - calculator.multiply()
  // - calculator.divide()
  // - calculator.numberClick()
  // - calculator.operatorClick()
  // - calculator.clearClick()


  // multiply 3x5 and get 15
  // divide 21/7 and get 3
  // add 1+4 and get 5
  // subtract 7-4 and get 3
  // concatenate multiple number button clicks
  // chain multiple operations together
  // clear the running total without affecting the calculation

});
