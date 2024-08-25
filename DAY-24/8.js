function empl(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].salary > 60000) {
            console.log(a[i].name);
        }
    }
}
empl([{ name: "John", position: "Manager", salary: 65000 }, { name: "Alice", position: "Developer", salary: 55000 }, { name: "Bob", position: "Designer", salary: 70000 }])