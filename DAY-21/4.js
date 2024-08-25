function findIndexOfFirstNegative(a)
{
    var b=a;

    for(var i=0;i<b.length;i++)
    {
        if(b[i]<0)
        {
            console.log(i);
        }
    }
    // b.forEach((element,index)=>{
    //     if(element<0)
    //     {
    //       console.log(index)  
    //     }
    //     else 
    //     {
    //       
    //     } 
    // })
}
findIndexOfFirstNegative([1,2,-3,4,5])