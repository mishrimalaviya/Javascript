function book(a)
{
    for (const key in a) {
        console.log(`${key}: ${a[key]}`);
    }
}
book({title: "Harry Potter", author: "J.K. Rowling", pages: 400})