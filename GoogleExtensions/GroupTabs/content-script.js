c = document.querySelector(".container")

browser.tabs.query({currentWindow: true}, function(result) {
    result.forEach(function(tab) {
        c.innerHTML = tab
    });
});