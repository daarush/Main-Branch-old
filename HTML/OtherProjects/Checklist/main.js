var addText = document.querySelector(".add-text")
var addButton = document.querySelector(".add-button")

addButton.addEventListener("click", () => {
    if (addText.value !== "") {
        var newLi = document.createElement("li")
        newLi.innerHTML = addText.value
        document.getElementById("checks").appendChild(newLi)
        myTodoListItems = document.querySelectorAll("li")
        addText.value = ""
    }
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    
})


var myList = document.querySelector("ul")
myList.addEventListener("click", (item) => {
    if (item.target.tagName == "LI") {
        item.target.classList.toggle("checked")
    }
})

////////////////////////////////////////////Close/////////////////////////////////////
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

