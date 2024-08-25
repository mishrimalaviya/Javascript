function factorial() {
    var a = document.getElementById("v1").value;
    var b = 1;
    let ans = fact();



    function fact() {
        let b = 1;
        for (var i = 1; i <= a; i++) {
            b = b * i;
        }
        return b;

    }
    document.getElementById("ans").innerText = `The Factorial of the nuber ${a} is ${ans}`;


}
function fact() {
    let num = document.getElementById("value3").value;
    let ans = f(num);


    function f(a) {

            if (a <= 1) {
                    return a;
                    
            }
            else {
                    return f(a - 1) + f(a - 2);
            }


    }
    document.getElementById("ans").innerText = `The Fibonacci of the number ${num} is ${ans}`;

}



function even() {
    var a = document.getElementById("value1").value;

    var res = eoc();

    function eoc() {
        if (a % 2 == 0) {
            // document.getElementById("ans").innerText="TRUE";
            return true;
        }

      
        else {
            // document.getElementById("ans").innerText="False";
            return false;

        }
    }

    document.getElementById("ans").innerText = `The ${a} is an ${res}`;

}

function absolute() {
    var a = document.getElementById("val2").value;

  

    if (a < 0) {
        var ans = (a - a) - a;
        document.getElementById("ans").innerText = ans;


    }
    else{
        document.getElementById("ans").innerText=a;
    }
}

function square() {
    var sq = document.getElementById("val1").value;
    var sp = "";


    if(sq=="")
    {
        alert("Please enter the number");
    }
    for (var i = 1; i <= sq; i++) {
        var squ = i * i;
        sp = sp + squ + ", "
    }
    document.getElementById("ans").innerText = sp;

    

}



