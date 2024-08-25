function stu(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].age > 21) {
            console.log(a[i].name);
        }
    }
}
stu([{ name: "John", age: 20, grade: "A" }, { name: "Alice", age: 22, grade: "B" }, { name: "Bob", age: 21, grade: "C" }])