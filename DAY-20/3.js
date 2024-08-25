// without nested function /
// var a=[5,10,15,20,25,30,35,40];

// var b=a.filter((el,i)=>{

//     if(el%2==0)
//     {
//         return el;
//     }

// });

// console.log(b);

// with nested function 

function even(a) {
    var b = a;

    var c = b.filter((el, i) => {
        if (el % 2 == 0) {
            return el;
        }
    })
    // console.log(c);/

    return c;
}
console.log(even([5, 10, 15, 20, 25, 30, 35, 40]));