function transformArray(a) {
    console.log("the original value");
    console.log(a);

    var b = a.map((element, index) => {
        if (element % 2 == 0) {
            return element * element
        }
        else {
            return element * element * element
        }
    })

    console.log("the square value of even numbers nd cude value of odd number ")
    console.log(b);
}
transformArray([1, 2, 3, 4, 5])