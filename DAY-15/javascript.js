function sum() {
    var a = document.getElementById("sum").value;
    let sum = 0;
    var sp = "";



    for (let i = 1; i <= a; i++) {
        sp=sp+i+" ";
        sum = sum + i;
        

    }

    document.getElementById("ans").innerText = sp + " = " +sum;
    // a*(a+1)/2
    // 5*(5+1)/2;
    // 5*6/2;
    // 30/2;
    //  15
    // aa if thi thase

}

function prime() {
    var prime = document.getElementById("prime").value;

    var i;
    var count = 0;
    var sp = "";

    for (i = 1; i <= prime; i++) {
        if (prime % i == 0) {
            // sp += i + " "; 
            sp=sp+i +" ";
            count++;
        }
    }


    if (count == 2) {
        document.getElementById("ans").innerText = sp + "total prime number is = " + count;
    }
    else {
        document.getElementById("ans").innerText = "wrong input";
    }


    // let a=prime()
}














































