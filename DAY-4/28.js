// Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200.

var price=200;
var tax=20;
var tip=15;
var taxs=price*20/100;
console.log("the tax charges =" +taxs);

var tips=price*tip/100;
console.log("the tip charges =" +tips);

var total=tips+taxs+20+price;
console.log("the total amount paid = " +total);