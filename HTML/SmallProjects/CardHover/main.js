var container = document.getElementById("main")
var front = document.getElementById("front-side")
var back = document.getElementById("back-side")
var ftrans = "front-transition"
var btrans = "back-transition"

container.addEventListener("mouseover", ()=>{
    front.classList.add(ftrans)
    front.addEventListener("transitionend", ()=>{
        front.style.display = "none"
        back.style.display = "flex"
        back.classList.add(btrans)
    })
})

container.addEventListener("mouseleave", ()=>{
    back.classList.remove(btrans)
    back.style.display = "none"
    front.style.display = "flex"
    front.classList.remove(ftrans)
})


var nav = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  var x = e.clientX - 12;
  var y = e.clientY;
  nav.style.left = x + "px";
  nav.style.top = y + "px";
});




