const a=[2,5,12,15,7,20];

console.log("the number greater then 10 is");


var b=a.filter((ele,i)=>{
    if(ele>=10){
        return ele;
    }
//    return ele>=10

})

console.log(b);

var c=b.map((ele,i)=>{

    return ele*ele;
})

// console.log(c);

console.log("the square of all the number which is greater then 10 ");

var d=c.forEach((el,i)=>{

    console.log(el);

})
