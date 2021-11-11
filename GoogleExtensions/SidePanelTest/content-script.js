var iframe = document.createElement("div");
iframe.className = "panel";
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "400px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
document.body.appendChild(iframe);

var cssLink = document.createElement("link") 
cssLink.href = "style.css"; 
cssLink .rel = "stylesheet"; 
cssLink .type = "text/css"; 
document.body.appendChild(cssLink);

iframe.src = chrome.runtime.getURL("popup.html");