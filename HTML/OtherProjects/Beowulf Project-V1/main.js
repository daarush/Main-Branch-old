var dropDownButtons = document.querySelectorAll(".beowulf-char-dropdown")
var dropDownDesc = document.querySelector(".beowulf-char-description")

dropDownButtons.forEach((button) => {
    button.addEventListener("click", () => {
        var parent = button.parentNode
        var wantedChild = parent.querySelector(".beowulf-char-description")
        wantedChild.classList.toggle("hide")
    })
})

var timelineContents = document.querySelectorAll(".content")
var i = 1
timelineContents.forEach((content) => {
    content.classList.add("hide")

    var node = content.querySelector(".main-content")
    if (!content.contains(node)) {
        var newP = document.createElement("p")
        newP.innerHTML = i
        content.appendChild(newP)
    } else {
        i -= 1
    }
    i++;
})


var panel = document.querySelector(".title-bar")
var panelButton = document.querySelector(".toggle-title")
panelButton.addEventListener("click", () => {
    panel.classList.toggle("hide")
})


window.onscroll = function (ev) {
    if (document.body.scrollTop == 0) {
        document.querySelector(".more-pictures").classList.remove("hide")
    } else {
        document.querySelector(".more-pictures").classList.add("hide")
    }
};

var links = document.querySelectorAll("a")
var isNewElement = false
links.forEach(link => {
    var newElement;
    link.addEventListener("mousemove", (e) => {
        if (isNewElement == false && link.parentElement != document.querySelector(".title-bar")) {
            newElement = document.createElement("div")
            isNewElement = true
        }
        newElement.className = "mouseElement"
        document.body.appendChild(newElement)
        
        newElement.style.top = e.pageY + 50 + 5;
        newElement.style.left = e.pageX;
        newElement.innerHTML = link.name
    })

    link.addEventListener("mouseout", (e) => {
        newElement.remove()
        isNewElement = false
    })
})
