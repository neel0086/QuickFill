// content.js

// Listen for messages from the background page
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("hello")
    // if (message.type === 'suggestions') {
    console.log("hello1")

    var inputFields = document.querySelectorAll('input[type="text"], input[type="search"]');
    console.log(inputFields)
    inputFields.forEach(function (input) {
        input.addEventListener('input', function () {
            var currentVal = input.value.toLowerCase();
            var matchedSuggestions = [];

            // Find the suggestions that match the current value
            for (var i = 0; i < message.suggestions.length; i++) {
                if (message.suggestions[i].toLowerCase().indexOf(currentVal) === 0) {
                    matchedSuggestions.push(message.suggestions[i]);
                }
            }

            // Display the suggestions as a dropdown
            var dropdown = document.createElement('div');
            dropdown.classList.add('suggestion-dropdown');
            matchedSuggestions.forEach(function (suggestion) {
                var suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion;
                dropdown.appendChild(suggestionItem);
            });
            input.parentNode.appendChild(dropdown);
        });
    });

    // Hide the suggestion dropdown when the user clicks outside of it
    document.addEventListener('click', function (event) {
        var dropdowns = document.querySelectorAll('.suggestion-dropdown');
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.parentNode.removeChild(dropdown);
            }
        });
    });
    // }
});
