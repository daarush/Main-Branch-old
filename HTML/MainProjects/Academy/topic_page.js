var nav = document.querySelector(".nav");
var checkbox = document.querySelector(".menu-controls");

document.addEventListener("click", (obj) => {
    if (checkbox.checked == true) {
        var element = obj.target;
        if (!(element.className == nav.className || nav.contains(obj.target))) {
            nav.classList.add("close");
        }
    }
});

document.addEventListener("dblclick", function (e) {
    if (checkbox.checked == true) {
        if (nav.classList.contains("close")) {
            nav.classList.remove("close");
        }
    }
});

function topicButtonClicked(btn) {
    var btnID = btn.id
    var wanted_id = "card-" + btnID
    var element = document.getElementById(wanted_id)
    
    document.querySelectorAll(".option").forEach((div) => {
        console.log("0")
        div.classList.remove("clicked");
        var cards = document.querySelectorAll(".card")
        cards.forEach(card=>{
            console.log("1")
            if (card.classList.contains("reading")) {
                card.classList.remove("reading")
                console.log("2")
            }
        })
    });
    btn.classList.add("clicked");
    element.classList.add("reading")
}


var closeMenuButton = document.querySelector(".close-menu-button") 
closeMenuButton.addEventListener("click", ()=>{
    nav.classList.toggle("close")
    closeMenuButton.classList.toggle("close")
    var cards = document.querySelectorAll(".card")
    cards.forEach(card=>{
        if (nav.classList.contains("close")) {
            if (card.classList.contains("reading")) {
                card.style.left = "50%"
            } 
        } else {
            if (card.classList.contains("reading")) {
                card.style.left = "60%"
            } 
        }
    })

})