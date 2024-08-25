function even()
{
    var eve=document.getElementById("even").value;
    var i;
    var sum=0;
    
    for(i=1;i<=eve;i++)
        {
            if(i%2==0)
                {
                    sum+=i;
                }
        }
      document.getElementById("answer").innerText="the sum of all the even numbers is = "+sum;

}

function multiple()
{
    var multi=document.getElementById("multi").value;
    var i;
    var an=""

    for(i=1;i<=multi;i++)
        {
            if(i%3==0 || i%5==0)
                {
                  an=an+i+" , ";
                }


        }
        document.getElementById("answer").innerText=an;
    
}

function count()
{
    var count=document.getElementById("count").value;
    var i;
    var co=1;



    for(i=1;i<=count;i++)
        {
            count=count/10;// count karse numbers  nd %=modular ek ek number ne less karse 

            co++;
        }
    document.getElementById("answer").innerText="the total digit is "+co;
}

function fourskip()
{
    var num=document.getElementById("va").value;

    var i;
    var sp=""

    for(i=1;i<=num;i++)
        {
            if(i%4==0)
                {
                    continue;

                }
            else{
                sp=sp+i+" ";
            }

        }
        document.getElementById("answer").innerText=sp;
}

function pattern()
{
    var p=document.getElementById("pattern").value;
    var count = 1; //count karse 

    var sp="";
  
    for ( i = 1; i <= p; i++) 
     {
        
        for ( j = i; j >= 1; j--)
        {
            sp += count + " "; // line ma lavse 
            // sp=sp+i+;
            count++;// increase karse line ne

        }
        sp+="\n"
        console.log(sp);
        document.getElementById("answer").innerText=sp;
     }


}
