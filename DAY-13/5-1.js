for(let i=1;i<=5;i++)
    {
        let a="";
        for(let j=1;j<=5;j++)
            {
                if( (i==2 && (j>1 && j<5)) || (i==3 && (j>1 && j<5)) || i==4 && (j>1 && j<5)  )
                    {
                       a+="  "
                    } 
                    else
                    {
                        a+="* "
                    }
            }console.log(a);
    }