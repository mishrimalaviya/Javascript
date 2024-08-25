document.addEventListener("DOMContentLoaded", () => {
   var arr = [];


   document.querySelector("#b2").addEventListener("click", (res) => {
      // 1input
      document.querySelector("#us").value = ""
      document.querySelector("#error").innerText = ""
      // 2input 
      document.querySelector("#pass").value = ""
      document.querySelector("#error1").innerText = ""
      // 3input 
      document.querySelector("#num").value= ""
      document.querySelector("#error2").innerText = ""
   })


   document.querySelector("#b1").addEventListener("click", (check) => {

      check.preventDefault()
      var isvalid = true;

      document.querySelector("#us").innerText = ""
      document.querySelector("#error").innerText = ""
      // 2input 
      document.querySelector("#pass").innerText = ""
      document.querySelector("#error1").innerText = ""
      // 3input 
      document.querySelector("#num").innerText = ""
      document.querySelector("#error2").innerText = ""


      // value get 

      var u = document.querySelector("#us").value;
      var p = document.querySelector("#pass").value;
      var n = document.querySelector("#num").value;

      try {

         // for usename 
         if (u == "") {
            isvalid = false;
            throw new Error("it is an empty input");
         }

         else if (u.length < 8) {
            document.querySelector("#error").innerText = "usename must be 8 "
            isvalid = false;

         }
         //  for password 

         if (p == "") {
            isvalid = false;
            throw new Error("it is an empty input");
         }
         else if (p.length < 8) {
            isvalid = false;
            document.querySelector("#error1").innerText = "paasword must be 8 "

         }


         // for number 
         if (n == "") {
            isvalid = false;
            throw new Error("it is an empty input");
         }
         else if (n >= "a" && n <= "z" || n >= 'A' && n <= 'Z') {
            isvalid = false;
            document.querySelector("#error2").innerText = "its is not a number"
         }
         else if (n.length < 10) {
            isvalid = false;
            document.querySelector("#error2").innerText = "number must be 10 "
         }

      } catch (err) {
         // console.log(err)
         document.querySelector("#error").style.color = "red";
         document.querySelector("#error").innerText = err;
         document.querySelector("#us").style.border = "1px solid red"


         document.querySelector("#error1").style.color = "red";
         document.querySelector("#error1").innerText = err;
         document.querySelector("#pass").style.border = "1px solid red"


         document.querySelector("#error2").style.color = "red";
         document.querySelector("#error2").innerText = err;
         document.querySelector("#num").style.border = "1px solid red"


      }
      console.log(isvalid)


      if (isvalid == true) {

         var o = {
            us: u,
            pas: p,
            nu: n,
         }

         arr.push(o);
         console.log(arr);


      alert("form Successful")

      }
      


   })

   document.querySelector("#logi").addEventListener("click", (d) => {
      d.preventDefault()

      document.querySelector(".div2").style.display = "block";
      document.querySelector(".div1").style.display = "none";
   })
})
