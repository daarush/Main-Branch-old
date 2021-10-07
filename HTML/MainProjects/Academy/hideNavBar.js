var navBar = document.querySelector(".page-title");

document.addEventListener("scroll", () => {
    console.log(";lkjhygtfd");
    if (window.scrollY != 0) {
        console.log(";lkjhgf");
        if (!navBar.classList.contains("hide")) {
            navBar.classList.add("hide");
        }
    } else {
        if (navBar.classList.contains("hide")) {
            navBar.classList.remove("hide");
        } else {
            navBar.classList.remove("hide");
        }
    }
});
