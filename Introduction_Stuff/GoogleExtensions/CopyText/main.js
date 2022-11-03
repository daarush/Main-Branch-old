var boxes = document.querySelectorAll(".box");
document.body.addEventListener("click", copyText);

function copyText(item) {
    let target = item.target;
    if (target.classList.contains("box")) {
        var text = target.innerHTML 
        navigator.clipboard.writeText(text)
        
        target.querySelector(".animation-box").classList.add("copied")
        target.querySelector(".animation-box").addEventListener("transitionend", ()=>{
            target.querySelector(".animation-box").classList.remove("copied")
        })
    }
}

