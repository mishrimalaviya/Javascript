// var a=[1,2,3,4,5];

// var data=a.map((element,index)=>{
//     return ("the value "+(element * element) +" the index value " +index);
// })

// console.log(data);

function squ(a)
{
    var b=a;
    console.log("the original value");
    console.log(b);


    var data=b.map((element,index)=>{
        return (element * element);
    });
    console.log("the squared value");


    console.log(data);
}
squ([1,2,3,4]);