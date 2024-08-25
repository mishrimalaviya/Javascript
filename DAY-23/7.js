function car(a) {

    console.log("without changing the year ");
    console.log(a);


    console.log("With changing the year");
    a.year = 2023
    return a
}
console.log(car({ brand: "Toyota", model: "Corolla", year: 2022 }))