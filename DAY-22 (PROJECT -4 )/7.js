
function double(a) {
    console.log("the original value");
    console.log(a);

    var b = a.map((element, index) => {
        return element * 2;
    })

    //    console.log(b);
    return b;
}
var a = double([1, 2, 3]);
console.log(" Double Value ")
console.log(a);

// normal way without function
// var a=[1,2,3];

// var b=a.map((element,index)=>{
//     return element*2
// })

// console.log(b);
