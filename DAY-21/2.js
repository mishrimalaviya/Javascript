function filterEvenNumbers(a) {
    var b = a;

    console.log("the original value");
    console.log(b);

    console.log("the even numbers");

    var even = b.filter((element, index) => {

        if (element % 2 == 0) {
            return element;
        }
    })

    return even;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
