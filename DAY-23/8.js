function car(a)
{
    console.log(a)
    var v=(b)=>{
        b.price=5000
        return b;
    }
    console.log(v(a))

}
car({brand: "Toyota", model: "Corolla", year: 2022 })
