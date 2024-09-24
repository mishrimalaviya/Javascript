document.getElementById("we").addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
        console.log(res.status);
        console.log(res.ok)
        return res.json()        
    })
    .then((res)=>{
       
        add(res)
    })
    .catch((err)=>{
        console.log(err);
        
    })

    function add(a){
        console.log(a.message)
        document.getElementById("qe").innerHTML=`<img src="${a.message}"/>`
    }
})