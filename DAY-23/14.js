function car(a)
{
    for (const key in a) {
        console.log(`${key}:${a[key]}`);
    }
}
car({brand: "Toyota", model: "Corolla", year:2022})