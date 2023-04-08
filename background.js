var activeTimers = [];
var data = {};
var flag = false;
var contextTitle = "Enable Suggestion";
var tabId;

chrome.storage.onChanged.addListener(function (changes, namespace) {
        chrome.storage.local.get("myData", function (result) {
                data = result.myData;
        });
});

chrome.tabs.onUpdated.addListener(function (Id, changeInfo, tab) {
        if (changeInfo.status === "complete") {
                chrome.storage.local.get("myData", function (result) {
                        data = result.myData;
                        tabId = Id;
                        if (flag) {
                                addContentScript();
                        }
                });
        }
});

const addContentScript = () => {
        chrome.tabs.executeScript(
                tabId,
                { file: "content.js" },
                function () {
                        chrome.tabs.sendMessage(tabId, { suggestions: data }, { frameId: 0 });
                }
        );
};

const removeContentScript = () => {
        chrome.tabs.sendMessage(tabId, { removeContentScript: true }, { frameId: 0 }, function () {
                console.log("Content script removed");
        });
};

const toggleSuggestion = () => {
        flag = !flag;
        const contextTitle = flag ? "Disable Suggestion" : "Enable Suggestion";
        chrome.contextMenus.update("suggestion-toggle", { title: contextTitle });
        if (flag) {
                addContentScript();
        } else {
                removeContentScript();
        }
};

chrome.contextMenus.create({
        id: "suggestion-toggle",
        title: "Enable Suggestion",
        contexts: ["page"],
        onclick: toggleSuggestion,
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.stopSuggestion) {
                removeContentScript();
        }
});
