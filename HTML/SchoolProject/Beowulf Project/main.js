var headlineDiv = document.querySelector(".starting-headline");
var headLineButton = document.querySelector(".lets-go-button");
var veil = document.querySelector(".veil");
var headLine = document.querySelector(".starting-headline-title");
if (headLine != null) {
  headLineButton.addEventListener("click", () => {
    veil.classList.add("start");
    veil.addEventListener("animationend", () => {
      headlineDiv.classList.add("start");
      headlineDiv.addEventListener("transitionend", () => {
        headlineDiv.remove();
      });
    });
  });
}

var dropDownButtons = document.querySelectorAll(".beowulf-char-dropdown");
var dropDownDesc = document.querySelector(".beowulf-char-description");

dropDownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var parent = button.parentNode;
    var wantedChild = parent.querySelector(".beowulf-char-description");
    wantedChild.classList.toggle("hide");
  });
});

var timelineContents = document.querySelectorAll(".content");
var i = 1;
timelineContents.forEach((content) => {
  content.classList.add("hide");

  var node = content.querySelector(".main-content");
  if (!content.contains(node)) {
    var newP = document.createElement("p");
    newP.innerHTML = i;
    content.appendChild(newP);
  } else {
    i -= 1;
  }
  i++;
});

var panel = document.querySelector(".title-bar");
var panelButton = document.querySelector(".toggle-title");
panelButton.addEventListener("click", () => {
  panel.classList.toggle("hide");
});

var links = document.querySelectorAll("a");
var isNewElement = false;
var debounce = false;
links.forEach((link) => {
  var newElement;
  link.addEventListener("mousemove", (e) => {
    if (
      isNewElement == false &&
      link.parentElement != document.querySelector(".title-bar") &&
      link.parentElement != document.querySelector(".topics-title-bar") &&
      link.parentElement != document.querySelector(".title-bar-option-topics") &&
      link.parentElement != document.querySelector(".title-bar-tile")
    ) {
      newElement = document.createElement("div");
      isNewElement = true;
      debounce = true;
    }
    if (debounce == true) {
      newElement.className = "mouseElement";
      document.body.appendChild(newElement);

      newElement.style.top = e.pageY + 50 + 5;
      newElement.style.left = e.pageX;
      newElement.innerHTML = link.name;
    }
  });

  link.addEventListener("mouseout", (e) => {
    if (debounce == true) {
      newElement.remove();
    }
    isNewElement = false;
    debounce = false;
  });
});
