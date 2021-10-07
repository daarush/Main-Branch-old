var arrow = document.querySelector(".fa-chevron-circle-right")
var index = 0

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
    log(index + slide)
})

function replace(item, before, after){
    item.classList.replace(before, after);
}

// var test = document.getElementById("date")
// test.style.cssText = "background-color: white"

// arrow.addEventListener("click", ()=>{
    // var divs = document.querySelectorAll("div");

    // var slide = divs[index]
//     slide.classList.remove("off")
//     slide.classList.add("on")
//     index++;

//     if (index === divs.length) {
//         for (let i = 0; i < divs.length; i++) { 
//             var slide = divs[i]
//             slide.classList.remove("on")
//             slide.classList.add("off")
//         }   
//         index = 0
//     }
// })

function log(text) {
    console.log(text)
}
