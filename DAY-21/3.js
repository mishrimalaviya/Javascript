function logSquares(a){
    var b=a
    console.log("the square of all the elements")

    b.forEach((element,index)=>{
        console.log(element* element);
    })
} 
logSquares([1,2,3]);