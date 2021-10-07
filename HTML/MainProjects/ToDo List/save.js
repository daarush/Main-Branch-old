var unloadButton = document.querySelector(".load-save");
unloadButton.addEventListener("click", unloadStorage);

let array = [];
var unloaded = false;
var autoSaveTimeInSec = 10;

window.addEventListener("load", () => {
	unloadStorage();
	setInterval(() => {
		localStorage.clear();
		array = [];
		console.log("Auto Saved Items");
		updateStorage();
	}, autoSaveTimeInSec * 1000);
});

function updateStorage() {
	let list_Sections = document.querySelectorAll("li");
	let i = 0;
	if (list_Sections.length > 0) {
		list_Sections.forEach((list) => {
			let checked = false;
			if (list.classList.contains("checked")) {
				checked = true;
			} else {
				checked = false;
			}
			const table = {
				checked: checked,
				info: list.innerHTML,
			};
			i++;
			array.push(table);
		});
		localStorage.setItem(i, JSON.stringify(array));
	}
}

function unloadStorage() {
	if (unloaded == false) {
		let list_Sections = document.querySelectorAll("li");
		if (!list_Sections.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				var key = localStorage.key(i);
				var value = localStorage[key];
				var parseObjs = JSON.parse(value);

				for (let val = 0; val < parseObjs.length; val++) {

					let newLi = document.createElement("li");
					newLi.innerHTML = parseObjs[val]["info"];

					if (parseObjs[val]["checked"] == true) {
						newLi.classList.add("checked");
						listCompleted += 1
					}

					document
						.getElementById("listSection")
						.querySelector("ul")
						.appendChild(newLi);


					totalListCount = parseObjs.length;
				}
			}
			unloaded = true;
		}
	}
}
