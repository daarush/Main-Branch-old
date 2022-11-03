 var testDiv = document.querySelector(".test")

// // getCurrentTab();
// chrome.tabs.query({}, function (tabs) {
//     tabs.forEach((tab) => {
//         console.log(tab.title);
//     });
// });
chrome.tabs.query({}, function (tabs) {
    tabs.forEach((tab) => {
        console.log(tab.title);
        var t = document.createElement("div").innerHTML = "sdasdasdad"
        testDiv.appendChild(t)
    });
});
