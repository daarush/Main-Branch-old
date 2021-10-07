var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
	const offset = circumference - (percent / 100) * circumference;
	circle.style.strokeDashoffset = offset;
}

setProgress(60);

var tasksBody = document.querySelector(".tasks");
var taskAddInput = document.querySelector(".task-add-textbox");
var tasksAddButton = document.querySelector(".task-add-button");
var currentMouseTarget;

tasksBody.addEventListener("click", updateTasks);
tasksAddButton.addEventListener("click", addTask);

function updateTasks(evt) {
	currentMouseTarget = evt.target;
    if (currentMouseTarget.className == "check-box-hover-area" || currentMouseTarget.className == "check-box") {
        var ancestor = findAncestor(currentMouseTarget, ".task")
        toggleTaskChecking(ancestor)
    }
}

function addTask() {    
    var task_div = document.createElement("div")
    task_div.className = "task"

    var msg_div = document.createElement("div")
    msg_div.className = "msg"
    var msg = taskAddInput.value;
    msg_div.innerHTML = msg
    task_div.appendChild(msg_div)

    var check_box_parent = document.createElement("div")
    check_box_parent.className = "check-box-hover-area"
    task_div.appendChild(check_box_parent)

    var checkbox = document.createElement("div")
    checkbox.className = "check-box"
    check_box_parent.appendChild(checkbox)

    var trash = document.createElement("div")
    trash.className = "trash"
    task_div.appendChild(trash)

    tasksBody.appendChild(task_div)
    taskAddInput.value = ""
}
 
function toggleTaskChecking(element) {
    element.classList.toggle("checked")
}

function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
}
