var a = ["apple", "banana", "cherry"];
var sp = "";

for (var i = 0; i < a.length; i++) {
    if (a[i].length > 5) {
        sp = sp + a[i] + " ";
    }
}
console.log(sp);