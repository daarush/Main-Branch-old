var arrow = document.querySelector(".fa-arrow-circle-right");
var index = 1;

arrow.addEventListener("click", () => {
  var divs = document.querySelectorAll(".slide");
  var slide = divs[index];
  index++;

  //turns off
  if (index >= divs.length) {
    index = 0;
    for (let i = 0; i < divs.length; i++) {
      replace(divs[i], "on", "off");
    }
  }

  //keep this for checking
  for (let i = 0; i < divs.length; i++) {
    replace(divs[i], "on", "off");
  }
  //

  replace(slide, "off", "on"); //turns on
});

function replace(item, before, after) {
  item.classList.replace(before, after);
}




var newMouse = document.getElementById("new-cursor");
document.addEventListener("mousemove", (e) => {
  var x = e.clientX - 12;
  var y = e.clientY;
  newMouse.style.left = x + "px";
  newMouse.style.top = y + "px";

  var slideTexts = document.querySelectorAll(".slides-text");
  slideTexts.forEach((slideText) => {
    slideText.addEventListener("mousemove", () => {
      newMouse.classList.add("text");
    });
    slideText.addEventListener("mouseout", () => {
      newMouse.classList.remove("text");
    });
  });

  var caret = document.querySelector(".fa-arrow-circle-right");
  caret.addEventListener("mousemove", () => {
    newMouse.classList.add("caret");
  });
  caret.addEventListener("mouseout", () => {
    newMouse.classList.remove("caret");
  });

  var images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("mousemove", () => {
        newMouse.classList.add("image");
    });
    image.addEventListener("mouseout", () => {
      newMouse.classList.remove("image");
    });
  });
});
