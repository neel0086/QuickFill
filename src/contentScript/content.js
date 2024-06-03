import "./content.css";

var dropdownIndex = -1;
var executed = true;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var inputFields = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='password']"
  );

  // TRIGGER INPUT EVENT
  function triggerTypingEvent(input) {
    // Dispatch typing event

    // Clear the input field's value
    input.value += "";

    // Dispatch input event
    var typingEvent = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(typingEvent);
  }

  function keyCleaning(keys) {
    let keyCleaned = keys.replace(/[()]/g, "").trim();

    // Split keys into subsets based on "comma", "or", "and", etc.
    let keySubsets = keyCleaned
      .split(/\s*(?:,|\bor\b|\band\b)\s*/)
      .map((subset) => subset.trim());
    return keySubsets;
  }

  function splitIntoWords(keySubsets) {
    let keyWords = [];
    // Split each subset into individual words
    keySubsets.forEach((subset) => {
      let words = subset.split(/\s+/).filter((word) => word.trim() !== "");
      if (words.length > 0) {
        keyWords.push(words);
      }
    });
    return keyWords;
  }

  function caclulateLengthPoints(keyWords, placeholderWords) {
    const lengthPoints = [];
    for (let i = 0; i < placeholderWords.length; i++) {
      let count = 0; // Initialize a counter for placeholder words in the current array

      // Iterate through each word in the current array
      for (let j = 0; j < placeholderWords[i].length; j++) {
        // Convert the keys word to lowercase for case insensitivity
        let placeholderWord = placeholderWords[i][j].toLowerCase();

        // Iterate through each placeholder word
        for (let k = 0; k < keyWords.length; k++) {
          // Convert the placeholder word to lowercase for case insensitivity
          let keyWord = keyWords[k].toLowerCase();

          // Check if the current keys word matches the placeholder word
          if (keyWord === placeholderWord) {
            count++; // Increment the counter if they match
            break; // Break out of the loop since we found a match
          }
        }
      }

      // Push the count to the result array
      lengthPoints.push(count);
    }
    return lengthPoints;
  }

  function calculateIndexPoints(keyWords, placeholderWords) {
    const indexPoints = [];

    for (let i = 0; i < placeholderWords.length; i++) {
      let indexPoint = 0; // Initialize index points for the current placeholder word

      // Iterate through each word in the placeholder
      for (let j = 0; j < placeholderWords[i].length; j++) {
        // Convert the placeholder word to lowercase for case insensitivity
        let placeholderWord = placeholderWords[i][j].toLowerCase();

        // Iterate through each keyword
        for (let k = 0; k < keyWords.length; k++) {
          // Convert the keyword to lowercase for case insensitivity
          let keyword = keyWords[k].toLowerCase();

          // Check if the current keyword matches the placeholder word
          if (keyword === placeholderWord) {
            // Calculate the index points based on the index of the keyword in the placeholder
            indexPoint += j + 1; // Add 1 because index starts from 0
            break; // Break out of the loop since we found a match
          }
        }
      }

      // Push the index points to the result array
      indexPoints.push(indexPoint);
    }

    return indexPoints;
  }

  function findHighestIndexPoints(lengthPoints) {
    const highestIndexes = {};

    // Iterate over each column (keyword)
    for (let column = 0; column < lengthPoints[0].length; column++) {
      let highestValue = 0; // Initialize highest value for the current column
      let keysWithHighestValue = []; // Initialize keys with highest value for the current column

      // Iterate over each row (placeholder word) in the current column
      for (let row = 0; row < lengthPoints.length; row++) {
        const indexPoint = lengthPoints[row][column];

        // If the current index point is greater than the highest value so far,
        // update the highest value and reset keysWithHighestValue array
        if (indexPoint > highestValue) {
          highestValue = indexPoint;
          keysWithHighestValue = [row]; // Start with a new array for the highest value
        } else if (indexPoint != 0 && indexPoint === highestValue) {
          keysWithHighestValue.push(row); // Add the current key to keysWithHighestValue array
        }
      }

      // If keysWithHighestValue is not empty, store it in highestIndexes with column as key
      if (keysWithHighestValue.length > 0) {
        highestIndexes[column] = keysWithHighestValue; // Convert array to comma-separated string
      }
    }

    return highestIndexes;
  }

  function findMinimumIndexPoints(indexPoints, suggestedWords) {
    const result = {};

    // Iterate over each key (row) in suggestedWords
    for (const key in suggestedWords) {
      // Initialize minimum index point to positive infinity and column index to -1
      let minIndexPoint = Infinity;
      let minColumnIndex = -1;

      // Iterate over each column in the array of indexes for the current row
      suggestedWords[key].forEach((column) => {
        const indexPoint = indexPoints[column][key]; // Get the index point for the current row and column

        // Update minIndexPoint and minColumnIndex if the current index point is less than the current minimum
        if (indexPoint < minIndexPoint) {
          minIndexPoint = indexPoint;
          minColumnIndex = column;
        }
      });

      // Store the column index with the minimum index point for the current row in the result object
      result[key] = minColumnIndex;
    }

    return result;
  }
  function suggestValue(suggestedWordTemp1, keySubsets, valueSet, placeholder) {
    const values = Object.entries(suggestedWordTemp1)
      .sort(([rowIndex1, columnIndex1], [rowIndex2, columnIndex2]) => {
        // Sort by rowIndex if "and" is present in placeholder
        if (placeholder.includes("and")) {
          return rowIndex1 - rowIndex2;
        }
        // Sort by keywords[rowIndex] if "or" or comma is present in placeholder
        else if (placeholder.includes("or") || placeholder.includes(",")) {
          return keySubsets[columnIndex1][0].localeCompare(
            keySubsets[columnIndex2][0]
          );
        }
        // Otherwise, no sorting required
        else {
          return 0;
        }
      })
      .map(([rowIndex, columnIndex]) => valueSet[columnIndex]);

    // If placeholder contains "or", return a single value from possible values
    if (placeholder.includes("or")) {
      return values[0]; // Return the first value
    }
    // If placeholder contains "and", return all values separated by a comma
    else if (placeholder.includes("and")) {
      return values.join(", ");
    }
    // If neither "or" nor "and" is present, return all values separated by a comma
    else {
      return values.join(", ");
    }
  }

  function placeHolderCheck(keys, placeholder, input) {
    //KeyCleaning
    const keySubsets = [];
    const valueSet = [];
    for (const key in keys) {
      const temp = keyCleaning(key);
      valueSet.push(keys[key]);
      keySubsets.push(temp);
    }

    //Differentiate words with multiple meanings
    const keyWords = [];
    keySubsets.forEach((subset) => {
      keyWords.push(splitIntoWords(subset));
    });

    //placeHolderCleaning
    const placeholderSubsets = keyCleaning(placeholder);
    //Differentiate words with multiple meanings
    const placeholderWords = splitIntoWords(placeholderSubsets);

    // const lengthPoints = {};
    // // return possible words
    const lengthPoints = [];
    keyWords.forEach((keyWord) => {
      lengthPoints.push(caclulateLengthPoints(keyWord[0], placeholderWords));
    });
    const indexPoints = [];
    keyWords.forEach((keyWord) => {
      indexPoints.push(calculateIndexPoints(keyWord[0], placeholderWords));
    });
    const suggestedWordTemp = findHighestIndexPoints(lengthPoints);
    const suggestedWordTemp1 = findMinimumIndexPoints(
      indexPoints,
      suggestedWordTemp
    );
    const suggestedResult = suggestValue(
      suggestedWordTemp1,
      keySubsets,
      valueSet,
      placeholder
    );
    if (suggestedResult) {
      input.value = suggestedResult;
      triggerTypingEvent(input);
    }
    return;

    // const indexPoints = caclulateIndexPoints(keyWords, placeholderWords);
  }

  if ("suggestions" in message) {
    inputFields.forEach(function (input) {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("input", function () {
        var searchKey = input.value.toLowerCase();
        var temp = [];

        // Find the suggestions that match the current value
        var keys = message.suggestions;
        for (const subKey in keys) {
          if (String(keys[subKey]).toLowerCase().includes(searchKey)) {
            temp.push(keys[subKey]);
          }
        }

        // Remove previously appended dropdown (if any)
        var prevDropdown = input.parentNode.querySelector(
          ".suggestion-dropdown"
        );
        if (prevDropdown) {
          prevDropdown.remove();
        }

        // Display the suggestions as a dropdown
        var dropdown = document.createElement("div");
        dropdown.classList.add("suggestion-dropdown");

        dropdown.style.position = "absolute";
        dropdown.style.top = input.offsetTop + input.offsetHeight + 20 + "px";
        dropdown.style.left = input.offsetLeft + "px";

        temp.forEach(function (suggestion) {
          var suggestionItem = document.createElement("div");
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.textContent = suggestion;
          dropdown.appendChild(suggestionItem);

          suggestionItem.addEventListener("click", function () {
            input.value = suggestion;
            dropdown.parentNode.removeChild(dropdown);
            triggerTypingEvent(input); // Trigger typing event
          });
        });
        input.parentNode.appendChild(dropdown);
      });

      input.addEventListener("keyup", function (event) {
        event.preventDefault();
        var dropdown = input.parentNode.querySelector(".suggestion-dropdown");
        if (dropdown) {
          var suggestionItems = dropdown.querySelectorAll(".suggestion-item");
          if (event.keyCode === 40) {
            // down arrow
            event.preventDefault();
            if (
              dropdownIndex >= 0 &&
              dropdownIndex < suggestionItems.length &&
              suggestionItems[dropdownIndex].classList.contains("selected")
            ) {
              suggestionItems[dropdownIndex].classList.remove("selected");
            }
            dropdownIndex++;
            if (dropdownIndex < suggestionItems.length) {
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            } else {
              dropdownIndex = 0;
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            }
          } else if (event.keyCode === 38) {
            // up arrow
            event.preventDefault();
            if (
              dropdownIndex >= 0 &&
              dropdownIndex < suggestionItems.length &&
              suggestionItems[dropdownIndex].classList.contains("selected")
            ) {
              suggestionItems[dropdownIndex].classList.remove("selected");
            }
            dropdownIndex--;
            if (dropdownIndex >= 0) {
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            } else {
              dropdownIndex = suggestionItems.length - 1;
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            }
          } else if (event.keyCode === 13) {
            // enter keys
            event.stopPropagation();
            event.preventDefault();
            if (dropdownIndex >= 0) {
              input.value = suggestionItems[dropdownIndex].textContent;
              dropdown.parentNode.removeChild(dropdown);
              triggerTypingEvent(input); // Trigger typing event
            }
          }
        }
      });
    });
    // Hide the suggestion dropdown when the user clicks outside of it
    document.addEventListener("click", function (event) {
      var dropdowns = document.querySelectorAll(".suggestion-dropdown");
      dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.parentNode.removeChild(dropdown);
        }
      });
    });
  } else if ("quickfill" in message) {
    var keys = message.quickfill;
    inputFields.forEach(function (input) {
      var inputName = input.getAttribute("name");
      var placeholder =
        input.getAttribute("placeholder") || input.getAttribute("aria-label");
      var label =
        document.querySelector('label[for="' + input.name + '"]') ||
        document.querySelector('label[for="' + input.id + '"]');
      var lowerLabelText = label?.textContent.trim().toLowerCase();

      // Check if the placeholder attribute is present
      if (placeholder && placeholder.length > 4) {
        placeHolderCheck(keys, placeholder, input);
      } else if (lowerLabelText) {
        placeHolderCheck(keys, lowerLabelText, input);
      } else if (inputName) {
        placeHolderCheck(keys, inputName, input);
      }
    });
  } else if ("showPassword" in message) {
    var keys = message.showPassword;
    inputFields.forEach(function (input) {
      var inputType = input.getAttribute("type");
      if (inputType === "password") {
        input.type = "text";
      }
    });
  } else {
    inputFields.forEach(function (input) {
      input.setAttribute("autocomplete", "on");
      input.removeEventListener("input", input.inputHandler);
      input.removeEventListener("keyup", input.keyupHandler);
      var dropdowns = document.querySelectorAll(".suggestion-dropdown");

      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
        dropdown.remove();
      });
    });
  }
});

// ------------------FUTURE SCOPE--------------------------------------//

// function displayOptions(input, possibilities) {
//   var existingDropdown = document.querySelector(".suggestion-list");
//   // Create a dropdown container
//   var dropdown = document.createElement("div");
//   dropdown.classList.add("suggestion-list");

//   dropdown.style.position = "absolute";
//   dropdown.style.top = input.offsetTop + "px";
//   dropdown.style.left = input.offsetLeft + "px";
//   dropdown.style.display = "flex";
//   possibilities.forEach(function (suggestion) {
//     var suggestionItem = document.createElement("div");
//     suggestionItem.classList.add("suggestion-item-list");
//     suggestionItem.textContent = suggestion;
//     dropdown.appendChild(suggestionItem);

//     suggestionItem.addEventListener("click", function () {
//       input.value = suggestion;
//       input.parentNode.removeChild(dropdown);
//       triggerTypingEvent(input); // Trigger typing event
//     });
//   });
//   input.parentNode.appendChild(dropdown);
// }
