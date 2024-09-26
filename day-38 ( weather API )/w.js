
document.getElementById("ba").style.backgroundImage ="url('https://www.shutterstock.com/shutterstock/photos/1937151346/display_1500/stock-photo-the-sky-has-the-light-of-the-sun-the-sky-is-blue-there-are-small-and-large-clouds-alternating-and-1937151346.jpg')"

document.getElementById("ba").style.backgroundSize = "cover"
document.getElementById("ba").style.backgroundPosition = "center"
console.log("rain")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=fcadc575434884a7afe78070ddd16010&units=metric`)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log(res)
        document.getElementById("ans").innerHTML =


            `
       <div class=" " style="margin-top: 150px;">
            <h1 class="fw-bold">${res.name}</h1>
            <p class="pt-3" style="font-size: 18px;">Temperature - ${res.main.temp}°C</p>
            <p class="" style="font-size: 18px;">Wind Speed -${res.wind.speed} Km/h</p>
            <p class="" style="font-size: 18px;">${res.weather[0].description}</p>
            </div>
            <div class="" style="margin-top: 150px;">
            <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></div>
        `
    })
    .catch((err) => {
        console.log(err)
    })




document.getElementById("b1").addEventListener("click", () => {
    var c = document.getElementById("a").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=fcadc575434884a7afe78070ddd16010`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("ans").innerHTML = tem(res)
        })
        .catch((err) => {
            console.log(err)
        })


    function tem(t) {
        console.log(t)

        var c = t.main.temp - (273.15)
        console.log(c.toFixed(2))

        var ws = parseInt(t.wind.speed * 3.6)



        if (t.weather[0].description.includes("clear")) {
            document.getElementById("ba").style.backgroundImage = "url('https://www.shutterstock.com/shutterstock/photos/1937151346/display_1500/stock-photo-the-sky-has-the-light-of-the-sun-the-sky-is-blue-there-are-small-and-large-clouds-alternating-and-1937151346.jpg')";
            document.getElementById("ba").style.backgroundSize = "cover"
            document.getElementById("ba").style.backgroundPosition = "center"
            console.log("rain")
        }
        else if (t.weather[0].description.includes("clouds")) {
            document.getElementById("ba").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUs8gSeqNrWZG1-IMYjOqf558OgNeC7zhrA&s')";
            document.getElementById("ba").style.backgroundSize = "cover"
            document.getElementById("ba").style.backgroundPosition = "center"
            console.log("rain")

        }
        else if (t.weather[0].description.includes("rain")) {

            document.getElementById("ba").style.backgroundImage = "url('https://media.istockphoto.com/id/538327557/photo/frozen-lake.jpg?s=612x612&w=0&k=20&c=ydmmGLEjOmDaLGuVMKPi-vqdDqKQA-ez0QfoY6fw-6w=')";
            document.getElementById("ba").style.backgroundSize = "cover"
            document.getElementById("ba").style.backgroundPosition = "center"
            console.log("rain")

        }
        else if (t.weather[0].description.includes("snow")) {

            document.getElementById("ba").style.backgroundImage = "url('https://www.shutterstock.com/image-vector/winter-blue-sky-falling-snow-600nw-726301927.jpg')";
            document.getElementById("ba").style.backgroundSize = "cover"
            document.getElementById("ba").style.backgroundPosition = "center"
            console.log("rain")


        }
        else if (t.weather[0].description.includes("haze")) {
            document.getElementById("ba").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/22/19/10/clouds-1850093_640.jpg')";
            document.getElementById("ba").style.backgroundSize = "cover"
            document.getElementById("ba").style.backgroundPosition = "center"
            console.log("rain")

          

        }



        return `<div class=" " style="margin-top: 150px;">
            <h1 class="fw-bold">${t.name}</h1>
            <p class="pt-3" style="font-size: 18px;">Temperature - ${c.toFixed(2)}°C</p>
            <p class="" style="font-size: 18px;">Wind Speed -${ws} Km/h</p>
            <p class="" style="font-size: 18px;">${t.weather[0].description}</p>
            </div>
            <div class="" style="margin-top: 150px;">
            <img src="https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png"></div>
        
              `
    }
})
