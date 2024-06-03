var activeTimers = [];
var data = {};
var flag = false;
var contextTitle = "Enable Suggestion";
var tabToggleStates = {};
var tabId;

// Function to set global variables and save them to local storage
const setGlobalVariables = () => {
  chrome.storage.local.set({
    activeTimers: activeTimers,
    data: data,
    flag: flag,
    contextTitle: contextTitle,
    tabToggleStates: tabToggleStates,
    tabId: tabId,
  });
};

// Function to retrieve global variables from local storage
const getGlobalVariables = () => {
  chrome.storage.local.get(
    [
      "activeTimers",
      "data",
      "flag",
      "contextTitle",
      "tabToggleStates",
      "tabId",
    ],
    function (result) {
      activeTimers = result.activeTimers || [];
      data = result.data || {};
      flag = result.flag || false;
      contextTitle = result.contextTitle || "Enable Suggestion";
      tabToggleStates = result.tabToggleStates || {};
      tabId = result.tabId;
    }
  );
};

// Call getGlobalVariables to initialize global variables from local storage
getGlobalVariables();

// Function to update local storage whenever global variables are modified
const updateLocalStorage = () => {
  setGlobalVariables();
};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  chrome.storage.local.get("myData", function (result) {
    data = result.myData;
    setGlobalVariables();
  });
});

chrome.tabs.onUpdated.addListener(function (Id, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    chrome.storage.local.get("myData", function (result) {
      data = result.myData;
      setGlobalVariables();

      if (tabToggleStates[tabId]) {
        addContentScript();
      }
    });
  }
});

const addContentScript = () => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId, allFrames: true },
      files: ["content.js"],
    },
    () => {
      chrome.tabs.sendMessage(tabId, { suggestions: data }, { frameId: 0 });
    }
  );
};

const removeContentScript = () => {
  chrome.tabs.sendMessage(
    tabId,
    { removeContentScript: true },
    { frameId: 0 },
    function () {}
  );
};

const toggleSuggestion = () => {
  flag = !tabToggleStates[tabId];
  const contextTitle = flag ? "Disable Suggestion" : "Enable Suggestion";
  chrome.contextMenus.update("suggestion-toggle", { title: contextTitle });

  // Update tab toggle state
  tabToggleStates[tabId] = flag;
  setGlobalVariables();

  if (flag) {
    addContentScript();
  } else {
    removeContentScript();
  }
};
chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "suggestion-toggle",
    title: "Suggestions  (CMD/CTRL+SHIFT+K)",
    contexts: ["all"],
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.stopSuggestion) {
    removeContentScript();
  }
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  tabId = activeInfo.tabId;
  if (!(tabId in tabToggleStates)) {
    tabToggleStates[tabId] = false;
  }
  const contextTitle = tabToggleStates[tabId]
    ? "Disable Suggestion"
    : "Enable Suggestion";
  setGlobalVariables();
  chrome.contextMenus.update("suggestion-toggle", { title: contextTitle });
});

// QuickFill premium feature
const autoFill = () => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId, allFrames: true },
      files: ["content.js"],
    },
    () => {
      chrome.tabs.sendMessage(tabId, { quickfill: data }, { frameId: 0 });
    }
  );
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "automate",
    title: "AutoFill     (CMD/CTRL+SHIFT+L)",
    contexts: ["all"],
  });
});

//SHOW PASSWROD CONNTEXT
const showPassword = () => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId, allFrames: true },
      files: ["content.js"],
    },
    () => {
      chrome.tabs.sendMessage(tabId, { showPassword: data }, { frameId: 0 });
    }
  );
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "automate",
    title: "AutoFill     (CMD/CTRL+SHIFT+L)",
    contexts: ["all"],
  });
});

//SWTICH CONTEXT MMENU AND ON COMMAND
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (tab) {
    if (info.menuItemId === "suggestion-toggle") {
      toggleSuggestion();
    }
    if (info.menuItemId === "automate") {
      autoFill();
    }
    if (info.menuItemId === "showPassword") {
      showPassword();
    }
  }
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggleSuggestion") {
    toggleSuggestion();
  } else if (command === "autoFill") {
    autoFill();
  } else if (command === "showPassword") {
    showPassword();
  }
});
