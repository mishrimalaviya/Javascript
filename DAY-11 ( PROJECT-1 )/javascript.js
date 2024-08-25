function leap()
{
    var leap=document.getElementById("leap").value;

    if(leap%4==0)
    {
        document.getElementById("answer").innerText=+leap +" is Year leap";
    }
    else
    {
        document.getElementById("answer").innerText="this year is not a leap year";
    }
}

function secondlarge()
{
    var a=document.getElementById("v1").value;
    var b=document.getElementById("v2").value;
    var c=document.getElementById("v3").value;

    // var max=a>b && a>c ?a: b>c && b>a ?b :c;
    // document.getElementById("max1").innerHTML="the maximun value = "+max;
    // var min=a<b && a<c ?a: b<c && b<a ?b:c;
    // document.getElementById("min1").innerHTML="the minimun value = "+min;

    if((a>b && a<c) || (a<b && a>c))
    {
        document.getElementById("answer").innerText="the second largest number is " +a;
    }
    else if((b>a && b<c)|| (b<a && b>c))
    {
        document.getElementById("answer").innerText="the second largest number is " +b;

    }
    else if((c>a && c<b) || (c<a && c>b)){
        document.getElementById("answer").innerText="the second largest number is " +c;

    }
   
}

function range()
{
    var a=document.getElementById("va1").value;
    var b=document.getElementById("va2").value;
    var c=document.getElementById("va3").value;

    if(a<c && b<c)
    
        {
            document.getElementById("answer").innerText="within the range";
        }
    else
    {
        document.getElementById("answer").innerText="out of range";
    }
}


function grade()
{
    var marks=document.getElementById("marks").value;

    if(marks>=90 && marks <=100)
        {
            document.getElementById("answer").innerText="the GPA IS  4.0"
        }
    else if(marks>=80 && marks<90)
        {
            document.getElementById("answer").innerText="the GPA IS 3.0";
        }
    else if(marks>=70 && marks<80)
        {
            document.getElementById("answer").innerText="the GPA IS 2.0";
        }
    else if(marks>=60 && marks<70)
        {
            document.getElementById("answer").innerText="the GPA IS 1.0";
        }
    else if(marks>=1 && marks<60)
        {
            document.getElementById("answer").innerText="the GPA IS 0.0";
        }
}

function income()
{
   var income=document.getElementById("income").value;
   var score=document.getElementById("Score").value;
   var loan=document.getElementById("Loan").value;

   if(income >50000 && score > 700 && loan < income/2)
    {
        document.getElementById("answer").innerText="Eligible"
    }
    else
    {
        document.getElementById("answer").innerText="Not Eligible"
    }
}