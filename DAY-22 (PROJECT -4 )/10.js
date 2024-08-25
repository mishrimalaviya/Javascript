var a=["apple","banana","pear"];

let b=a.filter((element,index)=>{
    if(element.length >3)
    {
        return element;
    }

})

console.log(b);