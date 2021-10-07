var nav = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  var x = e.clientX - 12;
  var y = e.clientY;
  nav.style.left = x + "px";
  nav.style.top = y + "px";
});


