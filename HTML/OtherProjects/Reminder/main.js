var tools = document.querySelector(".tools");
var toolsToggleButton = document.querySelector(".open-tools");

var container = document.querySelector(".container");
var createButton = document.querySelector(".create-button");
var createName = document.querySelector(".create-add-text");
var descriptionValue = document.querySelector(".create-add-description");

var rightClickMenu = document.querySelector(".right-click-menu")
var mouseX = 0;
var mouseY = 0;
var objects = document.querySelectorAll(".object");
var selectAll = document.querySelector(".select-all");
var unSelectAll = document.querySelector(".unselect-all");
var deleteAll = document.querySelector(".delete-all");
var deleteChecked = document.querySelector(".delete-checked");
var expand_collapse = document.querySelector(".expand-collapse");

var timeInput = document.querySelector(".get-input-time");
var timeDestination;


////////////////////////////////// Tool Panel Toggle

toolsToggleButton.addEventListener("click", () => {
    tools.classList.toggle("hide")
    toolsToggleButton.classList.toggle("move")
})

////////////////////////////////// Create Object Element

createButton.addEventListener("click", () => {
    if (createName.value != "") {
        if (createName.classList.contains("incorrect")) {
            createName.classList.remove("incorrect");
        }

        if (timeInput.classList.contains("incorrect")) {
            timeInput.classList.remove("incorrect");
        }
        var obj = document.createElement("div");
        obj.className = "object";
        var title = document.createElement("div");
        title.className = "title";
        title.innerHTML = createName.value + '<i class="fas fa-caret-down"></i>';
        var description = document.createElement("div");
        description.className = "description";
        description.innerHTML = descriptionValue.value;
        var span = document.createElement("span");
        span.className = "fa-stack fa-1x";
        span.innerHTML = '<i class="far fa-square fa-stack-1x"></i>';
        var footNote = document.createElement("div");
        footNote.className = "foot-note"
        footNote.innerHTML = "Remind You At:";

        obj.appendChild(title);
        title.appendChild(span);
        obj.appendChild(description);
        obj.appendChild(footNote);
        container.appendChild(obj);
    } else {
        createName.classList.add("incorrect");
        timeInput.classList.add("incorrect")
    }
})

////////////////////////////////// Expand Description

container.addEventListener("click", (item) => {
    if (item.target.className == "fas fa-caret-down") {
        var descriptionDiv = item.target.parentNode.parentNode.querySelector(".description")
        descriptionDiv.classList.toggle("hide");
    }
})

////////////////////////////////// Check and Uncheck Objects

container.addEventListener("click", (item) => {
    if (item.target.className == "far fa-square fa-stack-1x") {
        var parent = item.target.parentNode;
        if (!parent.parentNode.parentNode.classList.contains("checked")) {
            parent.innerHTML = '<i class="far fa-square fa-stack-1x"></i><i class="fas fa-check">';
            parent.parentNode.parentNode.classList.add("checked")
        } else if (parent.parentNode.parentNode.classList.contains("checked")) {
            parent.innerHTML = '<i class="far fa-square fa-stack-1x"></i>';
            parent.parentNode.parentNode.classList.remove("checked")
        }
    }
})

////////////////////////////////// Right Click Menu


container.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
})

container.addEventListener("contextmenu", (e) => {
    rightClickMenu.style.display = "block";
    rightClickMenu.classList.remove("hide");
    rightClickMenu.style.top = mouseY;
    rightClickMenu.style.left = mouseX;
    e.preventDefault();
})

container.addEventListener("click", ()=>{
    rightClickMenu.classList.add("hide");
    rightClickMenu.addEventListener("transitionend", ()=>{
        if (rightClickMenu.classList.contains("hide")) {
            rightClickMenu.style.display = "none";
        }
    })
})

////////////////////////////////// Select/Unselect All

selectAll.addEventListener("click", ()=>{
    objects = document.querySelectorAll(".object");
    objects.forEach((objectDiv)=>{
        if (!objectDiv.classList.contains("checked")) {
            objectDiv.classList.add("checked")
            objectDiv.querySelector("span").innerHTML = '<i class="far fa-square fa-stack-1x"></i><i class="fas fa-check"></i>';
        }
    })
})

unSelectAll.addEventListener("click", ()=>{
    objects = document.querySelectorAll(".object");
    objects.forEach((objectDiv)=>{
        if (objectDiv.classList.contains("checked")) {
            objectDiv.classList.remove("checked")
            objectDiv.querySelector("span").innerHTML = '<i class="far fa-square fa-stack-1x"></i>';
        }
    })
})

////////////////////////////////// Delete All//Checked

deleteAll.addEventListener("click",()=>{
    objects = document.querySelectorAll(".object");
    objects.forEach((objectDiv)=>{
        objectDiv.remove();
   }) 
}) 

deleteChecked.addEventListener("click",()=>{
    objects = document.querySelectorAll(".object");
    objects.forEach((objectDiv)=>{
        if (objectDiv.classList.contains("checked")) {
            objectDiv.remove();
        }
   }) 
}) 

////////////////////////////////// Expand/Collapse All

expand_collapse.addEventListener("click", ()=>{
    objects = document.querySelectorAll(".object");
    objects.forEach((objectDiv)=>{
        objectDiv.querySelector(".description").classList.toggle("hide")
   })
})

////////////////////////////////// Time Input

createButton.addEventListener("click", ()=>{
    timeDestination = timeInput.value;
    //timeLoop();
})

function timeLoop() {
    do {
        var today = new Date(); 
        var time = today.getHours() + ":" + today.getMinutes();
        console.log(time)
    } while (timeDestination == time);
}