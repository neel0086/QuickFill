var activeTimers = []
var data = {}


chrome.storage.onChanged.addListener(function (changes, namespace) {
        chrome.storage.local.get('myData', function (result) {
                data = result.myData
        })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
                chrome.storage.local.get('myData', function (result) {
                        console.log("Hello from backgroundd")
                        var data = result.myData;
                        chrome.tabs.executeScript(tabId, { file: 'content.js' }, function () {
                                chrome.tabs.sendMessage(tabId, { suggestions: data },{ frameId: 0 });
                        });
                });
        }
});
