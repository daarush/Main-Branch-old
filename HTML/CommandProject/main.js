var bodyText = document.querySelector(".textarea");

bodyText.addEventListener("keypress", () => {
	var key = window.event.keyCode;
	if (key === 13) {
		var contenteditable = document.querySelector("[contenteditable]");
		var text = contenteditable.textContent;
		var subString = text.substring(
			text.indexOf("|") + 1,
			text.lastIndexOf("|")
		);

		if (subString != "") {
			var tasks = document.getElementsByTagName("div");
			for (let i = 0; i < tasks.length; i++) {
				if (tasks[i].innerHTML == subString) {
					console.log(console.log("contains"));
				} else {
					const selection = window.getSelection();
					if (selection.rangeCount !== 0) {
						const range = selection.getRangeAt(0).cloneRange();
						range.collapse(true);
						const rect = range.getClientRects()[0];
						if (rect) {
							x = rect.left;
							y = rect.top;
						}
						newTask(subString, rect.y);
					}
				}
			}
		}
	}
});

function newTask(text, posY) {
	var taskDiv = document.createElement("div");
	taskDiv.className = "task";
	taskDiv.innerHTML = text;
	document.body.appendChild(taskDiv);
	taskDiv.style.left = 0;
	taskDiv.style.top = posY;

	taskDiv.addEventListener("click", () => {
		taskDiv.classList.toggle("completed");
	});
}
