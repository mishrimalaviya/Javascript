function grade() {
    var ass = document.getElementById("ass").value;
    var mid = document.getElementById("mid").value;
    var fin = document.getElementById("fina").value;

    ass = parseInt(ass) * 40 / 100;
    mid = parseInt(mid) * 30 / 100;
    fin = parseInt(fin) * 30 / 100;

    var to = ass + mid + fin;

    document.getElementById("ans").innerText = "the total " + parseFloat(to);

    if (to >= 90 && to <= 100) {
        document.getElementById("ans1").innerText = "A grade";
    }
    else if (to >= 80 && to <= 89) {
        document.getElementById("ans1").innerText = "B grade";

    }
    else if (to >= 70 && to <= 79) {
        document.getElementById("ans1").innerText = "C grade";

    }
    else if (to >= 60 && to <= 69) {
        document.getElementById("ans1").innerText = "D grade";

    }
    else if (to >= 0 && to <= 50) {
        document.getElementById("ans1").innerText = "F grade";

    }
    else {
        document.getElementById("ans1").innerText = "please enter valid marks";

    }




}

function salary() {
    var a = document.getElementById("yrs").value;
    salary = 90000;

    if (a >= 0 && a <= 2) {
        document.getElementById("ans").innerText = "No bonus";
    }
    else if (a >= 3 && a <= 5) {
        sal = salary * 10 / 100;
        ans = sal + salary;
        document.getElementById("ans1").innerText=+sal;
        document.getElementById("ans").innerText = "the salary of an emplyees experineces of between 3 to 5 " + ans;
    }
    else if (a >= 6 && a <= 10) {
        sal1 = salary * 20 / 100;
        ans1 = sal1 + salary;
        document.getElementById("ans1").innerText=+sal1;
        document.getElementById("ans").innerText = "the salary of an emplyees experineces of between 3 to 5" + ans1;
    }
    else if (a=="") {
       alert("please enter the value");
    }
    else
    {
        sal2 = salary * 30 / 100;
        ans2 = sal2 + salary;
        document.getElementById("ans1").innerText=+sal2;
        document.getElementById("ans").innerText = "the salary of an emplyees experineces of between 3 to 5" + ans2;
    }





}