// Calculate the total bill amount including 18% tax and a $5 service charge for a purchase of $80.
var purchase=80;
var tax=18;

var t=(purchase*tax)/100;
console.log("the tax=" +t);

total=t+purchase+5;
console.log("the total amount paid =" +total);