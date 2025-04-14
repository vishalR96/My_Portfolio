let a = document.getElementById("preloader")
window.addEventListener("load", function(){
    setTimeout(() => {
        a.style.display = "none";
    }, 2000);
})


let body = document.querySelector("body") 
let b = document.getElementById("cursor")
body.addEventListener("mousemove", function(e){
    // console.log("hey")
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
})

let icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.src = "./sun.png";
        console.log("hey")
    }else{
        icon.src = "./moon.png";
    }
}


