var newMouse = document.getElementById("new-cursor");
document.addEventListener("mousemove", (e) => {
  var x = e.clientX - 12;
  var y = e.clientY;
  newMouse.style.left = x + "px";
  newMouse.style.top = y + "px";
});

document.addEventListener("mousedown", ()=>{
  addRemove(newMouse, "mouse-down", "mouse-up")
  newMouse.classList.add("down")
  newMouse.addEventListener("transitionend", ()=>{
    newMouse.classList.remove("down")
  })
})

document.addEventListener("mouseup", ()=>{
  addRemove(newMouse, "mouse-up", "mouse-down")
})


function addRemove(item, newItem, oldItem){
  item.classList.add(newItem)
  item.classList.remove(oldItem)
}