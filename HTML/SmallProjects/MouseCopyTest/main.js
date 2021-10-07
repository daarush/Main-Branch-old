var output = document.querySelector(".output");
var msg = document.querySelector(".message");

document.addEventListener("mouseup", (e) => {
    if (window.getSelection().toString().length > 0) {
        //const selection = encodeURIComponent(window.getSelection().toString()).replace(/[!'()*]/g, escape);
        const selection = window.getSelection().toString();
        output.innerHTML = selection;
        document.execCommand("copy");

        var x = e.clientX - 12;
        var y = e.clientY;
        msg.style.left = x + "px";
        msg.style.top = y + "px";
        
        msg.classList.replace("hide", "show");
        setTimeout(function () {
            msg.classList.replace("show", "hide");
        }, 800);

    }
});
