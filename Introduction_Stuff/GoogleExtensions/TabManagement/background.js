// async function getCurrentTab() {
// 	chrome.tabs.query({}, function (tabs) {
// 		tabs.forEach((tab) => {
// 			console.log(tab.title);
// 		});
// 	});
// }

//getCurrentTab()
//------------------------------------------
async function getCurrentTab() {
	chrome.tabs.query({}, function (tabs) {
		tabs.forEach((tab) => {
			console.log(tab.title);
		});
	});
}
