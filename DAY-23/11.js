function book(a)
{
    console.log(a)
    return `Reading ${a.title} by ${a.author}`
}
console.log(book({title:"Harry Potter", author: "J.K. Rowling", pages: 400}))