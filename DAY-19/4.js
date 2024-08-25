var a=["a","b","c","d"];

var data=a.map((element,index)=>{
    
    a[1]="z";
    return element;
})
console.log(data);