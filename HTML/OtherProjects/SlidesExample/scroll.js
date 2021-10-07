var home = document.querySelector(".home-button")
var achievements = document.querySelector(".trophy-button")
document.body.style.overflow = "hidden"


home.addEventListener("click", ()=>{
    document.body.style.overflow = "scroll"
    setInterval(() => {
        document.body.style.overflow = "hidden"
    }, 1000);
})

achievements.addEventListener("click", ()=>{
    document.body.style.overflow = "scroll"
})
