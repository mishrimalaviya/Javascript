var sum=0;
var i;

for(i=1;i<=100;i++)
    {
        sum=sum+i;
        // console.log(sum);

        if(sum>1000)
            {
                break;
            }
    }
    console.log("the number break "+sum);
