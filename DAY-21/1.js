function doubleAndAddIndex(a) {

    var b = a;

    console.log("the original value");
    console.log(b);

    console.log("the double value");

    var d = b.map((element, index) => {

        return element * 2 + index;

    })

    return d;
}

console.log(doubleAndAddIndex([2, 3, 4]));