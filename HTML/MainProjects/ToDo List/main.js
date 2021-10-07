var percentage = document.querySelector(".progress-bar-percentage");
var new_button = document.querySelector(".new-button");
var newSection = document.querySelector(".new-section");
var newText = document.querySelector(".text-box");
var checker = document.querySelector(".checkable-list-section");
var menu = document.querySelector(".menu");
var deleteButton = document.getElementById("delete");
var renameButton = document.getElementById("rename");
var renameTextBox = document.querySelector(".rename-box");
var renameSection = document.querySelector(".rename-section");

let totalListCount = 0;
let listCompleted = 0;
let target;
let average = 0;

document.body.addEventListener("click", ToggleItem);
document.body.addEventListener("contextmenu", OpenRightMenu);
document.body.addEventListener("mousemove", UpdateProgressBar);
newText.addEventListener("keyup", CreateNewElement);
deleteButton.addEventListener("click", DeleteElement);
renameButton.addEventListener("click", OpenRenamePanel);
renameTextBox.addEventListener("keyup", RenameElement);

document.body.addEventListener("keyup", CancelNewElement);
new_button.addEventListener("click", OpenNewCardPanel);

function OpenRightMenu() {
	var e = window.event;
	if (e.target.tagName == "LI") {
		var posX = e.clientX;
		var posY = e.clientY;
		menu.classList.add("show");
		menu.style.top = posY;
		menu.style.left = posX;

		target = e.target;
	}
	e.preventDefault();
	return target;
}

document.addEventListener("click", () => {
	if (menu.classList.contains("show")) {
		menu.classList.remove("show");
	}
});

function DeleteElement() {
	var target = OpenRightMenu();
	target.remove();
	if (target.classList.contains("checked")) {
		listCompleted--;
	}
	totalListCount--;
}

function RenameElement(event) {
	if (renameTextBox.value != "") {
		if (event.keyCode === 13) {
			target.innerHTML = renameTextBox.value;
			renameTextBox.value = "";
			CloseRenamePanel();
		}
	}
}

function OpenRenamePanel() {
	let divs = document.querySelectorAll("div");
	renameSection.classList.add("opened");

	divs.forEach((div) => {
		if (div != renameSection) {
			div.style.transition = "all 0.4s ease";
			div.style.filter = "blur(5px)";
		}
	});
}

function CloseRenamePanel() {
	let divs = document.querySelectorAll("div");
	renameSection.classList.remove("opened");

	divs.forEach((div) => {
		if (div != renameSection) {
			div.style.transition = "all 0.4s ease";
			div.style.filter = "";
		}
	});
}

function ToggleItem(item) {
	let target = item.target;
	let getTag = item.target.tagName;
	switch (getTag) {
		case "LI":
			target.classList.toggle("checked");

			if (target.classList.contains("checked")) {
				listCompleted++;
			} else {
				listCompleted--;
			}
			break;

		default:
			break;
	}
}

function CreateNewElement(event) {
	if (newText.value != "") {
		if (event.keyCode === 13) {
			let list_section = document.getElementById("listSection");
			let name = newText.value;

			let new_li = document.createElement("li");
			new_li.innerHTML = name;

			list_section.querySelector("ul").appendChild(new_li);

			let divs = document.querySelectorAll("div");
			newSection.classList.remove("opened");

			divs.forEach((div) => {
				if (div != newSection) {
					div.style.transition = "all 0.5s ease";
					div.style.filter = "";
				}
			});

			newText.value = "";
			totalListCount++;
		}
	}
}

function UpdateProgressBar() {
	average = (listCompleted / totalListCount) * 500;
	percentage.style.width = average;
	document.querySelector(".progress-bar-title").innerHTML =
		Math.floor((listCompleted / totalListCount) * 100) + "%";

	//console.log("Total: " + totalListCount, "Completed: " + listCompleted)
}

function CancelNewElement(event) {
	if (newSection.classList.contains("opened")) {
		if (event.keyCode === 27) {
			let divs = document.querySelectorAll("div");
			divs.forEach((div) => {
				if (div != newSection) {
					div.style.transition = "all 0.5s ease";
					div.style.filter = "";
				}
			});
			newSection.classList.remove("opened");
		}
	} else if (renameSection.classList.contains("opened")) {
		if (event.keyCode === 27) {
			let divs = document.querySelectorAll("div");
			divs.forEach((div) => {
				if (div != renameSection) {
					div.style.transition = "all 0.5s ease";
					div.style.filter = "";
				}
			});
			renameSection.classList.remove("opened");
		}
	}
}

function OpenNewCardPanel() {
	let divs = document.querySelectorAll("div");
	newSection.classList.add("opened");

	divs.forEach((div) => {
		if (div != newSection) {
			div.style.transition = "all 0.4s ease";
			div.style.filter = "blur(5px)";
		}
	});
}
