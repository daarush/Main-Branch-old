var addButton = document.getElementById("iconAdd")
var parent = document.getElementById("imagesDiv")

addButton.addEventListener("click", () => {
    var newImg = document.createElement("img")
    newImg.className = "newImg"
    parent.appendChild(newImg)
    var textBox = document.getElementById("textboxID")
    var val = textBox.value
    newImg.src = val
    textBox.value = ""
})