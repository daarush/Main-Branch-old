var arrow = document.querySelector(".fa-arrow-circle-right")
var index = 1

arrow.addEventListener("click", ()=>{
    var divs = document.querySelectorAll(".slide");
    var slide = divs[index]
    index++

    //turns off
    if (index >= divs.length) {
        index = 0
        for (let i = 0; i < divs.length; i++) {
            replace(divs[i], "on", "off") 
        }
    }

    //keep this for checking
    for (let i = 0; i < divs.length; i++) {        
        replace(divs[i], "on", "off")
    }
    //

    replace(slide, "off", "on") //turns on
})

function replace(item, before, after){
    item.classList.replace(before, after);
}