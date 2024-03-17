$(document).ready(function () {
  // Define the object to store the key-value pairs
  var data = {};

  // Retrieve stored data when the popup is opened
  function loadTableData() {
    chrome.storage.local.get("myData", function (result) {
      if (result.myData) {
        data = result.myData;

        // Add rows to the table for each key-value pair in the object
        $.each(data, function (key, value) {
          var row = $("<tr></tr>");
          var td_key = $("<td></td>");
          var td_val = $("<td></td>");

          td_key.addClass("table_key");
          td_val.addClass("table_val");

          td_key.text(key);
          td_val.text(value);
          row.append(td_key);
          row.append(td_val);
          $(".tbody").append(row);
        });
      }
      $("#inp_key").val("");
      $("#inp_val").val("");
    });
  }

  // Call the function to load table data when needed
  loadTableData();

  var inp_key = "",
    inp_val = "";
  $(".addBtn").click(function () {
    inp_key = $("#inp_key").val().trim();
    inp_val = $("#inp_val").val().trim();

    var keyExists = Object.keys(data).some(function (key) {
      return key.toLowerCase() === inp_key.toLowerCase();
    });

    if (keyExists) {
      showCustomAlert(
        "Key already exists. Please enter a different key or update the existing key"
      );
      return;
    } else {
      insertData();
      return;
    }
  });
  const adjustBracketSpacing = (inp_key) => {
    if (inp_key.indexOf("(") !== -1 && inp_key.indexOf("(") !== 0) {
      inp_key = inp_key.replace("(", " (");
    }

    // Add space after closing parenthesis if not already there
    if (
      inp_key.lastIndexOf(")") !== -1 &&
      inp_key.lastIndexOf(")") !== inp_key.length - 1
    ) {
      inp_key = inp_key.replace(")", ") ");
    }
    return inp_key;
  };

  function insertData() {
    if (inp_key.length > 0 && inp_val.length > 0) {
      // Add the new key-value pair to the object
      inp_key = adjustBracketSpacing(inp_key);
      data[inp_key.toLocaleLowerCase()] = inp_val;
      // Store the updated object in Chrome storage
      chrome.storage.local.set({ myData: data }, function () {
        console.log("Data stored.");
      });
      $(".tbody").empty();
      loadTableData();
    } else {
      showCustomAlert("Please enter something in both fields");
    }
  }
  function showCustomAlert(message) {
    $("#alertMessage").text(message);
    $("#customAlert").show();
  }

  // Close custom alert on button click
  $("#closeAlert").click(function () {
    $("#customAlert").hide();
  });

  $("#updateBtn").click(function () {
    insertData();
    $("#customAlert").hide();
  });
});
