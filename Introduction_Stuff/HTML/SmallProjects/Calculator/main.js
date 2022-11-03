var buttons = document.querySelectorAll(".button")
var answer = document.querySelector(".answer")

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        answer.innerHTML = button.innerHTML
    })
})