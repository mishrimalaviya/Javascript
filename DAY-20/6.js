const number=[2,3,4,5,6,7,8,9,];

console.log("the original value");
console.log(number);

console.log("the odd index value is double");


let a=number.map((el,i)=>{

    if(i%2!=0)
    {
        return el*2;
    }
    else{
        return el;
    }

})

console.log(a);