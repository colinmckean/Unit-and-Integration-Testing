var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });
  it('should update the display with a result of operation', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'));
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });
  it('should give a decimal when required', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'));
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
  });
  it('should give a negative number when required', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  });
  it('should not affect the running total if divided by zero', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  // it('should chain multiple operations together');
  // Do the number buttons work to update the display of the running total? 
  // Do each of the arithmetical operations work to update the display with the result of the operation? Can we chain multiple operations together? 
  // Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers) 
  

  // // What does the code do in exceptional circumstances? If you divide by zero, what is the effect?
  //  Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.

});