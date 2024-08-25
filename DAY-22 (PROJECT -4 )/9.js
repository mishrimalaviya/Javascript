function even(a)
{
    console.log("the original value");
    console.log(a);

    var b=a.filter((element,index)=>{
        if(element%2==0){
            return element;
        }
    });
    console.log("the square value");
    console.log(b);
}
even([1,2,3,4,5])