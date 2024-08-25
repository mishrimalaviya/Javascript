var a=["apple","banana","cherry"];

var q=a.map((element,index)=>{
    if(element=="banana")
    {
        console.log("the index value of banana is "+index);
        return index;
        
    }
    else
    {
        return element;
    }

})
console.log(q);