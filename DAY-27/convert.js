document.addEventListener("DOMContentLoaded",()=>{
    a=[];
    document.querySelector("form").addEventListener("submit",e)
    {
        e.preventDefault()
    b=[{
        name: document.querySelector("#name").value,
        pas: document.querySelector("#password").value,
        numb:document.querySelector("#number").value,
    }]

    a.push(b);
    console.log(a);
    }
    


})