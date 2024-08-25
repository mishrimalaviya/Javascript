
function cube(a)
{
    var b=a;
    console.log("the original value");
    console.log(b);

    console.log("the cubed value");

    var data=b.map((element,index)=>{
        return (element * element *element);
    });

    console.log(data);
}
cube([1,2,3,4,5]);