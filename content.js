var executed = false;

if (!executed) {
    var dropdownIndex = -1;
    executed=true
    console.log(chrome.runtime.getManifest().name)
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        var inputFields = document.querySelectorAll('input[type="text"], input[type="search"]');
        inputFields.forEach(function (input) {
            input.addEventListener('input', function () {
                input.setAttribute("autocomplete", "off");
                var searchKey = input.value.toLowerCase();
                var temp = [];

                // Find the suggestions that match the current value
                var key = message.suggestions;
                for (const subKey in key) {
                    if (String(key[subKey]).toLowerCase().includes(searchKey)) {
                        temp.push(key[subKey]);
                    }
                }

                // Remove previously appended dropdown (if any)
                var prevDropdown = input.parentNode.querySelector('.suggestion-dropdown');
                if (prevDropdown) {
                    prevDropdown.remove();
                }

                // Display the suggestions as a dropdown
                var dropdown = document.createElement('div');
                dropdown.classList.add('suggestion-dropdown');
                temp.forEach(function (suggestion) {
                    var suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item');
                    suggestionItem.textContent = suggestion;
                    dropdown.appendChild(suggestionItem);

                    suggestionItem.addEventListener('click', function () {
                        input.value = suggestion
                        dropdown.parentNode.removeChild(dropdown)
                    })
                });
                input.parentNode.appendChild(dropdown);
            });
            input.addEventListener('keyup', function (event) {
                var dropdown = input.parentNode.querySelector('.suggestion-dropdown');
                if (dropdown) {
                    var suggestionItems = dropdown.querySelectorAll('.suggestion-item');
                    if (event.keyCode === 40) { // down arrow
                        event.preventDefault();
                        if(dropdownIndex>=0 && dropdownIndex<suggestionItems.length && suggestionItems[dropdownIndex].classList.contains("selected")){
                            suggestionItems[dropdownIndex].classList.remove('selected');
                        }
                        dropdownIndex++;
                        console.log(suggestionItems, dropdownIndex)
                        if (dropdownIndex < suggestionItems.length) {
                            suggestionItems[dropdownIndex].classList.add('selected');
                            input.value = suggestionItems[dropdownIndex].textContent;
                        }
                        else {
                            dropdownIndex = 0;
                            suggestionItems[dropdownIndex].classList.add('selected');
                            input.value = suggestionItems[dropdownIndex].textContent;
                        }
                    } else if (event.keyCode === 38) { // up arrow
                        event.preventDefault();
                        if(dropdownIndex>=0 && dropdownIndex<suggestionItems.length && suggestionItems[dropdownIndex].classList.contains("selected")){
                            suggestionItems[dropdownIndex].classList.remove('selected');
                        }
                        dropdownIndex--;
                        if (dropdownIndex >= 0) {
                            suggestionItems[dropdownIndex].classList.add('selected');
                            input.value = suggestionItems[dropdownIndex].textContent;
                        } 
                        else{
                            console.log(dropdownIndex)
                            dropdownIndex = suggestionItems.length - 1
                            suggestionItems[dropdownIndex].classList.add('selected');
                            input.value = suggestionItems[dropdownIndex].textContent;
                        }
                    } else if (event.keyCode === 13) { // enter key
                        event.stopPropagation()
                        event.preventDefault();
                        if (dropdownIndex >= 0) {
                            input.value = suggestionItems[dropdownIndex].textContent;
                            dropdown.parentNode.removeChild(dropdown);
                        }
                    }
                }
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
}