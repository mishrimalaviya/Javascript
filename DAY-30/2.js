class Laptop {
    constructor(a, b, c) {
        this.brand = a
        this.model = b
        this.price =c

       
    }
    getshowDetail()
    {
        console.log(`${this.brand}`)
    }
}
var myLaptop = new Laptop("dell", "XPS 15", 1500);
myLaptop.getshowDetail()


