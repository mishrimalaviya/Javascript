// let a=Math.random()*10000;
// let b=Math.round(a);
// console.log(b)

document.getElementById("quo").innerHTML = `<h1 class="">Click To Select the type of quotes</h1>`


function motivational() {
    var a = [
        {
            qu: "The only way to do great work is to love what you do",
            wr: "Steve Jobs "
        },

        {
            qu: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            wr: "Steve Winston Churchill "
        },

        {
            qu: "Believe you can and you're halfway there",
            wr: "Theodore Roosevelt "
        },
        {
            qu: "The future belongs to those who believe in the beauty of their dreams",
            wr: "Eleanor Roosevelt"
        }
    ]

    var img=[
        {
           qu: "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
        },
        {
            qu:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-515252110.jpg"
        },
        {
            qu:"https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop"
        },
        {
            qu:"https://cdn.britannica.com/04/3804-050-EB9DD403/Theodore-Roosevelt.jpg"
        }
    ]

    let b = Math.random() * a.length;
    let c = Math.round(b);

    let i=Math.random()*img.length;
    let im=Math.round(i);
    document.getElementById("quo").innerHTML = `
    <div class=" d-flex justify-content-between " style="width=100% ; height:50% ; ">

        <div class=" text-light" style="width:400px; height:60% ; border-radius: 0px 50px 50px 0px;  background-color: #3C3D37;  ">
        <spam style="font-size: 35px;">Motivational Quote</spam><br>
            <h5 class="pt-2">${a[c].wr}</h5>
        </div>


        <div style="width:180px; height:180px;  ; class="rounded-circle d-flex justify-content-between align-item-center" >
             <img src="${img[im].qu}" style="width:100%; height:100%;" class="rounded-circle " >
        </div>
    </div>
    
    <div style=" border:5px solid #3C3D37; border-right:none;border-top:none;border-bottom:none; height:50%" class="d-flex justify-content-center align-items-center p-2">
        <center> <h1>"${a[c].qu}"</h1>
        
        </center>

    </div>

    `
        ;
}

function sad() {
    var b = [
        {
            qu: "The pain of parting is nothing to the joy of meeting again",
            wr: "Charles Dickens"

        },
        {
            qu: "Tears come from the heart and not from the brain",
            wr: "Leonardo da Vinci"

        },
        {
            qu: "The saddest thing about betrayal is that it never comes from your enemies.",
            wr: "Jim Rohn"
        },
        {
            qu: "The word 'happiness' would lose its meaning if it were not balanced by sadness.",
            wr: "Carl Jung"
        }

    ]

    var img=[
        {
           qu: "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
        },
        {
            qu:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-515252110.jpg"
        },
        {
            qu:"https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop"
        },
        {
            qu:"https://cdn.britannica.com/04/3804-050-EB9DD403/Theodore-Roosevelt.jpg"
        }
    ]

    let q = Math.random() * b.length;
    let x = Math.round(q);

    let i=Math.random()*img.length;
    let im=Math.round(i);

    document.getElementById("quo").innerHTML = `
    <div class=" d-flex justify-content-between " style="width=100% ; height:50% ; ">

        <div class=" text-light" style="width:400px; height:60% ; border-radius: 0px 50px 50px 0px;  background-color: rgb(52, 51, 54);  ">
        <spam style="font-size: 35px;">Sad Quote</spam><br>
            <h5 class="pt-2">${b[x].wr}</h5>
        </div>


        <div style="width:180px; height:180px;  ; class="rounded-circle d-flex justify-content-between align-item-center" >
             <img src="${img[im].qu}" style="width:100%; height:100%;" class="rounded-circle " >
        </div>
    </div>
    
    <div style=" border:5px solid rgb(52, 51, 54); border-right:none;border-top:none;border-bottom:none; height:50%" class="d-flex justify-content-center align-items-center p-2">
        <center> <h1>"${b[x].qu}"</h1>
        
        </center>

    </div>

    `
    // document.getElementById("quo").innerText="mishri"
}


function happy() {
    var c = [
        {
            qu: "Happiness is not something ready made. It comes from your own actions.",
            wr: "Dalai Lama"

        },
        {
            qu: "The purpose of our lives is to be happy.",
            wr: "John Lennon"
        },
        {
            qu: "The happiness of your life depends upon the quality of your thoughts.",
            wr: "Marcus Aurelius"
        },
        {
            qu: "Happiness is not something ready made. It comes from your own actions.",
            wr: "Valerie Bertinelli"
        },
        {
            qu: "The only limit to our realization of tomorrow will be our doubts of today.",
            wr: "Dalai Lama"
        }
    ]

    var img=[
        {
           qu: "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
        },
        {
            qu:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-515252110.jpg"
        },
        {
            qu:"https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop"
        },
        {
            qu:"https://cdn.britannica.com/04/3804-050-EB9DD403/Theodore-Roosevelt.jpg"
        }
    ]

    let a = Math.round(Math.random() * c.length);
    console.log(a);

    let i=Math.random()*img.length;
    let im=Math.round(i);

    document.getElementById("quo").innerHTML = `
    <div class=" d-flex justify-content-between " style="width=100% ; height:50% ; ">

        <div class=" text-light" style="width:400px; height:60% ; border-radius: 0px 50px 50px 0px;  background-color: #4A403A ">
        <spam style="font-size: 35px;">Happy Quote</spam><br>
            <h5 class="pt-2">${c[a].wr}</h5>
        </div>


        <div style="width:180px; height:180px;  ; class="rounded-circle d-flex justify-content-between align-item-center" >
             <img src="${img[im].qu}" style="width:100%; height:100%;" class="rounded-circle " >
        </div>
    </div>
    
    <div style=" border:5px solid #4A403A; border-right:none;border-top:none;border-bottom:none; height:50%" class="d-flex justify-content-center align-items-center p-2">
        <center> <h1>"${c[a].qu}"</h1>
        
        </center>

    </div>

    `
}

function cler() {

    document.getElementById("quo").innerHTML = `<h1>Click To Select the type of quotes</h1>`

}

