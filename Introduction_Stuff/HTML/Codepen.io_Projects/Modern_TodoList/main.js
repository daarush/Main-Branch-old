var textbox = document.querySelector(".create-new-list-textbox");
var parent = document.querySelector(".panel");
var getAllLists = parent.querySelectorAll(".list-name-tile")

textbox.addEventListener("keyup", (event) => {
	if (event.keyCode === 13) {
		var val = textbox.value;
        if (val != "") {
            var p = document.createElement("div");
            p.className = "list-name-tile";
    
            var c1 = document.createElement("div");
            c1.className = "hamburger-bar-container";
            c1.innerHTML = `<div class="hamburger-bar"></div>
            <div class="hamburger-bar"></div>
            <div class="hamburger-bar"></div>`;
    
            var name = document.createElement('div');
            name.className = "list-name-display"
            name.innerHTML = val
    
            var numCon = document.createElement("div")
            numCon.className = "list-number-container"
            var numDisplay = document.createElement("div")
            numDisplay.className = "list-number-display"
            numDisplay.innerHTML = Math.floor(Math.random() * 10);
            numCon.appendChild(numDisplay)
    
            p.appendChild(c1)
            p.appendChild(name)
            p.appendChild(numCon)
    
            parent.appendChild(p)
            parent.insertBefore(p, parent.children[parent.children.length - 2])
            console.log(parent.children.length - 2)
            textbox.value = ""
        }
    }
});

parent.addEventListener("click", e => {
    if (e.target.closest(".list-name-tile") != null) {
        var selectedEl = document.querySelector(".selected");
        if(selectedEl){
            selectedEl.classList.remove("selected");
        }
        e.target.closest(".list-name-tile").classList.add("selected");
    }
});
