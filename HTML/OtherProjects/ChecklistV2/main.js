//variables
var container = document.querySelector(".container");
var addText = document.querySelector(".add-text");
var addButton = document.querySelector(".add-button");

//filter variables
var filter = document.querySelector(".filters");
var allOption = document.getElementById("all-option");
var doneOption = document.getElementById("done-option");
var notDoneOption = document.getElementById("notDone-option");

//save variables
var saveButton = document.getElementById("saveButton");
var newSaveInfoDiv;

//creation
addButton.addEventListener("click", () => {
  if (addText.value != "") {
    var newPart = document.createElement("div");
    var newCheckPart = document.createElement("div");
    var newName = document.createElement("div");
    var newDeletePart = document.createElement("div");

    newPart.className = "part";
    newCheckPart.className = "check-part";
    newName.className = "name";
    newDeletePart.className = "delete-part";

    newName.innerHTML = addText.value;
    newDeletePart.innerHTML = `<i class="fas fa-trash"></i>`;

    newPart.appendChild(newCheckPart);
    newPart.appendChild(newName);
    newPart.appendChild(newDeletePart);
    container.appendChild(newPart);
    addText.value = "";


    var object = {name: newName.innerHTML}; //add value if it only checked
    var jsonChanged = JSON.stringify(object);
    localStorage.setItem(object.name, jsonChanged);
  }
});
//check an item or uncheck it
container.addEventListener("click", (item) => {
  switch (item.target.className) {
    case "check-part":
      item.target.parentNode.classList.toggle("checked");
      toggleCheckStorage(
        item.target.parentNode,
        item.target.parentNode.querySelector(".name").innerHTML
      );
      break;

    case "part":
      item.target.classList.toggle("checked");
      toggleCheckStorage(
        item.target,
        item.target.querySelector(".name").innerHTML
      );
      break;

    case "part checked":
      item.target.classList.toggle("checked");
      toggleCheckStorage(
        item.target,
        item.target.querySelector(".name").innerHTML
      );
      break;

    case "name":
      item.target.parentNode.classList.toggle("checked");
      toggleCheckStorage(
        item.target.parentNode,
        item.target.parentNode.querySelector(".name").innerHTML
      );
      break;
  }
});


function toggleCheckStorage(parent, innerName) {
  if (parent.classList.contains("checked")) {
    var object = { name: innerName, value: "checked"};
    var jsonChanged = JSON.stringify(object);
    localStorage.setItem(object.name, jsonChanged);
  } else {
    var object = {name: innerName};
    var jsonChanged = JSON.stringify(object);
    localStorage.setItem(object.name, jsonChanged);
  }
}

//deletion
container.addEventListener("click", (item) => {
  if (item.target.className == "fas fa-trash") {
    var par = item.target.parentNode.parentNode;
    par.classList.add("deleted");

    par.addEventListener("transitionend", () => {
      par.style.display = "none";
      localStorage.removeItem(par.querySelector(".name").innerHTML);
      par.remove(); //delete this line if you want to save it?
    });
  }
});

//filter
filter.addEventListener("click", () => {
  if (allOption.selected == true) {
    var items = document.querySelectorAll(".part");
    items.forEach((item) => {
      item.style.display = "flex";
    });
  } else if (doneOption.selected == true) {
    var items = document.querySelectorAll(".part");
    items.forEach((item) => {
      if (item.classList.contains("checked")) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  } else if (notDoneOption.selected == true) {
    var items = document.querySelectorAll(".part");
    items.forEach((item) => {
      if (!item.classList.contains("checked")) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
});

//store/save
saveButton.addEventListener("click", () => {
  var objs = document.querySelectorAll(".part");
  objs.forEach((obj) => {
    var nameHTML = obj.querySelector(".name").innerHTML;
    var sendingObject;
    if (obj.classList.contains("checked")) {
      sendingObject = { name: nameHTML, value: "checked" };
    } else {
      sendingObject = { name: nameHTML };
    }
    var jsonChange = JSON.stringify(sendingObject);
    localStorage.setItem(sendingObject.name, jsonChange);
  });
});

// var getSheetIdentity = {
//   get sheedId() {
//     sheets = document.querySelectorAll(".sheet")
//     for (i = 0; i < sheets.length; i++) {
//       if (sheets[i].checked) {
//         sheetId = sheets[i].id
//         console.log(sheetId)
//         return sheetId
//       }
//     }
//   }
// }

saveButton.addEventListener("mouseenter", () => {
  newSaveInfoDiv = document.createElement("div");
  newSaveInfoDiv.className = "mouse-text";
  newSaveInfoDiv.innerHTML = "Just in case";
  saveButton.appendChild(newSaveInfoDiv);
});

saveButton.addEventListener("mouseleave", () => {
  var divs = document.querySelectorAll(".mouse-text");
  divs.forEach((div) => {
    div.remove();
  });
});

loadFromStorage();
function loadFromStorage() {
  for (var i = 0, len = localStorage.length; i < len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    var parseObj = JSON.parse(value);
    newElementPartSecond(key, parseObj);
  }
}

function newElementPart(item) {
  var newPart = document.createElement("div");
  var newCheckPart = document.createElement("div");
  var newName = document.createElement("div");
  var newDeletePart = document.createElement("div");

  newPart.className = "part";
  newCheckPart.className = "check-part";
  newName.className = "name";
  newDeletePart.className = "delete-part";

  newName.innerHTML = item.name;
  newDeletePart.innerHTML = `<i class="fas fa-trash"></i>`;

  newPart.appendChild(newCheckPart);
  newPart.appendChild(newName);
  newPart.appendChild(newDeletePart);
  container.appendChild(newPart);

  if (item.value != null) {
    newPart.classList.add(item.value);
  }
}

function newElementPartSecond(key, value) {
  var newPart = document.createElement("div");
  var newCheckPart = document.createElement("div");
  var newName = document.createElement("div");
  var newDeletePart = document.createElement("div");

  newPart.className = "part";
  newCheckPart.className = "check-part";
  newName.className = "name";
  newDeletePart.className = "delete-part";

  newName.innerHTML = key;
  newDeletePart.innerHTML = `<i class="fas fa-trash"></i>`;

  newPart.appendChild(newCheckPart);
  newPart.appendChild(newName);
  newPart.appendChild(newDeletePart);
  container.appendChild(newPart);

  if (value.value != null) {
    newPart.classList.add(value.value);
  }
}

// var sheetDiv = document.querySelector(".sheet-div ");
// var addButton = document.querySelector(".add-button-for-sheets");
// var nameForSheet = document.querySelector(".add-text-for-sheets");
// addButton.addEventListener("click", () => {
//   if (nameForSheet.value != "") {
//     var nameInput = nameForSheet.value;
//     var newInput = document.createElement("input");
//     var elements = sheetDiv.getElementsByTagName("input");

//     newInput.type = "radio";
//     newInput.name = "sheet";
//     newInput.id = elements.length + 1;
//     newInput.className = "sheet";

//     var elementText = document.createTextNode(nameInput);
//     sheetDiv.appendChild(newInput);
//     sheetDiv.appendChild(elementText);
//   }
// });
