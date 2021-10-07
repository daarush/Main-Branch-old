function topicButtonClicked(btn) {
    document.querySelectorAll(".block").forEach(div => {
        div.classList.remove("clicked")
    });
    btn.classList.add("clicked")
    console.log(btn);
}