function capitalizeWords(a) {
    console.log(a);
    sp = "";

    for (var i = 0; i < a.length; i++) {
        
        if (i == 0 || a[i - 1] == ' ') {
            sp = sp + a[i].toUpperCase()
        }
        else {
            sp = sp + a[i];

        }
    }
    console.log(sp);

}

capitalizeWords("hello world")

