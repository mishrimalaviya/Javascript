var first_number=0;
var last_number=1;

console.log("the first value ="+first_number);
console.log("the last value ="+last_number);

for(i=1;i<=8;i++)
    {
        var next=first_number+last_number;

        first_number=last_number;
        last_number=next;

        console.log("the fibonacci value is starting from here = " +next);

    }