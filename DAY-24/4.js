function car(c) {
    c.forEach((element, index) => {
        console.log(`Brand: ${element["brand"]}, model: ${element["model"]}`)
    })
}
car([{ brand: "Toyota", model: "Corolla", year: 2022 }, { brand: "Honda", model: "Civic", year: 2021 }, { brand: "Ford", model: "Fusion", year: 2020 }])