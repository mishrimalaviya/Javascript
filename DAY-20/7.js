const number=[1,2,3,4,5,6,7,8];
var sum=0

number.forEach((el,i)=>{
    if(el%2!=0)
    {

        sum=sum+el;

    }

})
console.log("the sum of all the elements is "+sum);



