var activeTimers = []
var data = {}


chrome.storage.onChanged.addListener(function (changes, namespace) {
        chrome.storage.local.get('myData', function (result) {
                data = result.myData
        })
});
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//         if (changeInfo.status === 'complete') {
//                 chrome.storage.local.get('myData', function (result) {
//                         data = result.myData


//                         // Retrieve the key-value pairs from Chrome storage
//                         var suggestions = [];
//                         for (var key in data) {
//                                 suggestions.push(key);
//                         }
//                         console.log(suggestions)
//                         if (document.readyState !== "loading") {
//                                 // Find all input fields on the page and add an event listener to each one
//                                 var inputFields = document.querySelectorAll('input[type="text"], input[type="search"]');
//                                 console.log(inputFields)
//                                 inputFields.forEach(function (input) {
//                                         input.addEventListener('input', function () {
//                                                 var currentVal = input.value.toLowerCase();
//                                                 var matchedSuggestions = [];
//                                                 console.log("inside input")
//                                                 // Find the suggestions that match the current value
//                                                 for (var i = 0; i < suggestions.length; i++) {
//                                                         if (suggestions[i].toLowerCase().indexOf(currentVal) === 0) {
//                                                                 matchedSuggestions.push(suggestions[i]);
//                                                         }
//                                                 }

//                                                 // Display the suggestions as a dropdown
//                                                 var dropdown = document.createElement('div');
//                                                 dropdown.classList.add('suggestion-dropdown');
//                                                 matchedSuggestions.forEach(function (suggestion) {
//                                                         var suggestionItem = document.createElement('div');
//                                                         suggestionItem.classList.add('suggestion-item');
//                                                         suggestionItem.textContent = suggestion;
//                                                         dropdown.appendChild(suggestionItem);
//                                                 });
//                                                 input.parentNode.appendChild(dropdown);
//                                         });
//                                 });

//                                 // Hide the suggestion dropdown when the user clicks outside of it
//                                 document.addEventListener('click', function (event) {
//                                         var dropdowns = document.querySelectorAll('.suggestion-dropdown');
//                                         dropdowns.forEach(function (dropdown) {
//                                                 if (!dropdown.contains(event.target)) {
//                                                         dropdown.parentNode.removeChild(dropdown);
//                                                 }
//                                         });
//                                 });
//                         }

//                 })

//         }
// })

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
                chrome.storage.local.get('myData', function (result) {
                        var data = result.myData;

                        // Retrieve the key-value pairs from Chrome storage
                        var suggestions = [];
                        for (var key in data) {
                                suggestions.push(key);
                        }

                        // Inject a content script to handle the suggestion dropdown logic
                        chrome.tabs.executeScript(tabId, { file: 'content.js' }, function () {
                                // Pass the suggestions to the content script
                                chrome.tabs.sendMessage(tabId, { suggestions: suggestions });
                        });
                });
        }
});
