// without nested function /

// const number=[10,20,30,40,50];

// const a=number.map((element,index)=>{

//     // return element+index;

// })

// // console.log(a);

// with nested function 

function increament(a) {
    var b = a;

    let d = b.map((el, i) => {

        return el + i;
    })

    return d;
}

console.log(increament([10, 20, 30, 40, 50]));

