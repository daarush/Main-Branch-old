var addButton = document.getElementById("iconAdd")
var parent = document.getElementById("imagesDiv")

addButton.addEventListener("click", () => {
    var textBox = document.getElementById("textboxID")
    var val = textBox.value
    if (val != "") {
        var newImg = document.createElement("img")
        newImg.className = "img"
        parent.appendChild(newImg)

        newImg.src = val
        textBox.value = ""
    } else {
        textBox.placeholder = "Empty or not a url!"
    }
})

////////////////////////////////////////////

var clicked = false
var deleteButton = document.getElementById("deleteDiv")
var icon = document.getElementById("deleteIcon")

deleteButton.addEventListener("click", () => {
    if (clicked == false) {

        deleteButton.style.backgroundColor = "#FF8C00"
        icon.style.color = "#000000"

        let className = document.getElementsByClassName("img")

        for (let i = 0; i < className.length; i++) {
            let element = className[i];
            element.style.opacity = 0.35

            element.addEventListener("click", () => {
                element.classList.add("img-delete")
                deleteButton.classList.add("trash-animation")
                log(element.classList)
                element.addEventListener("transitionend", () => {
                    element.classList.remove("img-delete")
                    deleteButton.classList.remove("trash-animation")
                    element.remove()
                })
            })
        }
        clicked = true
    } else {

        let className = document.getElementsByClassName("img")
        for (let i = 0; i < className.length; i++) {
            let element = className[i];
            element.style.opacity = 90
            element.classList.remove("img-delete")
            deleteButton.classList.remove("trash-animation")
        }

        deleteButton.style.backgroundColor = "#000000"
        icon.style.color = "#FF8C00"
        clicked = false
    }
})


function log(text) {
    console.log(text)
}