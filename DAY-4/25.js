// Determine the total bill amount including a 20% tip and 10% tax for a meal costing $100
var amount=100;
var tip=20;
var tax=10;

t=(amount*tip)/100;
console.log("the tip =" +t);
t1=(amount*tax)/100;
console.log("the tax amount is=" +t1);
total=amount+t+t1;
console.log("the total amount is =" +total);