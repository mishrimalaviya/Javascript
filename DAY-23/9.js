function book(a){
    console.log(a);
    console.log("Remove property")

    delete a.pages
    return a;
}
console.log(book({title: "Harry Potter", author: "J.K. Rowling", pages: 400 }))