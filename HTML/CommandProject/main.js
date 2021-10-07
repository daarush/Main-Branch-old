var bodyText = document.querySelector(".textarea");

bodyText.addEventListener("keypress", () => {
    var key = window.event.keyCode;
    if (key === 13) {
        var contenteditable = document.querySelector("[contenteditable]");
        var text = contenteditable.textContent;

        var subString = text.substring(
            text.indexOf("!") + 1,
            text.lastIndexOf("!")
        ); //gets specific phrase
        // 'subString' phrase is also the thing i wanted it to be replaced

        const string = subString;
        if (subString !== "") {
            console.log(string);
            newTask(string);
            text.replace(subString, "[][]"); //<--this does not work
        }

    }
});

function newTask(input) {
    var taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.addEventListener("click", () => {
        taskDiv.classList.toggle("completed");
    });

    var textboxDiv = document.createElement("div");
    textboxDiv.className = "textbox";
    textboxDiv.contentEditable = true;
    textboxDiv.innerHTML = input;

    taskDiv.appendChild(textboxDiv);
    bodyText.appendChild(taskDiv);
}
