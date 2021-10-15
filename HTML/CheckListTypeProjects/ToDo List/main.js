var boxes = document.querySelectorAll(".box");
var menu = document.querySelector(".menu");
var move_to_todo = document.getElementById("move-to-doing");
var move_to_doing = document.getElementById("move-to-todo");
var move_to_done = document.getElementById("move-to-done");

var NeedToDoSection = document
  .querySelector(".need-to-do-section")
  .querySelector(".holder");
var DoingSection = document
  .querySelector(".doing-section")
  .querySelector(".holder");
var DoneSection = document
  .querySelector(".done-section")
  .querySelector(".holder");
var currentBox;

boxes.forEach((box) => {
  box.querySelector(".box-title").addEventListener("click", () => {
    console.log(box)
    var boxInfo = box.querySelector(".box-info");
    boxInfo.classList.toggle("show");
  });
});

boxes.forEach((box) => {
  box.addEventListener("contextmenu", () => {
    currentBox = box;

    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    menu.classList.add("show");
    menu.style.top = posY;
    menu.style.left = posX;

    e.preventDefault();
  });
});

document.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});

move_to_todo.addEventListener("click", () => {
  NeedToDoSection.appendChild(currentBox);
});

move_to_doing.addEventListener("click", () => {
  DoingSection.appendChild(currentBox);
});

move_to_done.addEventListener("click", () => {
  DoneSection.appendChild(currentBox);
});

var user_title = document.getElementById("user-entered-title");
var user_info = document.getElementById("user-entered-info");
var create_task_button = document.querySelector(".create-task");

create_task_button.addEventListener("click", () => {
  var title = user_title.value;
  var info = user_info.value;

  if (title != "" && info != "") {
    var newDiv = document.createElement("div");
    newDiv.className = "box";

    var box_title = document.createElement("div");
    box_title.className = "box-title";
    box_title.innerHTML = title;

    var box_info = document.createElement("div");
    box_info.className = "box-info";
    box_info.innerHTML = info;

    newDiv.appendChild(box_title);
    newDiv.appendChild(box_info);
    NeedToDoSection.appendChild(newDiv);

    boxes = document.querySelectorAll(".box");
  }
});
