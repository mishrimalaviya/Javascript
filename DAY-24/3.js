function st(student) {
    student.forEach((element, index) => {
        console.log(`${element.name} - ${element.age} year old`)
    })
}
st([{ name: "John", age: 20, grade: "A" }, { name: "Alice", age: 22, grade: "B" }, { name: "Bob", age: 21, grade: "C" }])
