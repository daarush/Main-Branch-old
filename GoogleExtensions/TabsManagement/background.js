// function injectedFunction() {
// 	var iframe = document.createElement("div");
// 	iframe.className = "sdasdasdadasdasdasd";
// 	iframe.style.background = "green";
// 	iframe.style.height = "100%";
// 	iframe.style.width = "400px";
// 	iframe.style.position = "fixed";
// 	iframe.style.top = "0px";
// 	iframe.style.right = "0px";
// 	iframe.style.zIndex = "9000000000000000000";
// 	document.body.appendChild(iframe);
// 	iframe.src = chrome.extension.getURL("popup.html");
// }

chrome.action.onClicked.addListener((tab) => {
	// chrome.tabs.sendMessage(tab.id,"toggle");
	// chrome.scripting.executeScript({
	// 	target: { tabId: tab.id },
	// 	function: injectedFunction,
	// });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["content-script.js"],
	});
});
