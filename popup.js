$(document).ready(function () {
        // Define the object to store the key-value pairs
        var data = {};

        // Retrieve stored data when the popup is opened
        chrome.storage.local.get('myData', function (result) {
                if (result.myData) {
                        data = result.myData;
                        console.log('Retrieved data:', data);
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
                                $("#tablist").append(row);
                        });
                }
        });

        $(".addBtn").click(function () {
                var inp_key = $("#inp_key").val().trim();
                var inp_val = $("#inp_val").val().trim();
                console.log(inp_key, inp_val);
                if (inp_key.length > 0 && inp_val.length > 0) {
                        var row = $("<tr></tr>");
                        var td_key = $("<td></td>");
                        var td_val = $("<td></td>");

                        td_key.addClass("table_key");
                        td_val.addClass("table_val");

                        td_key.text(inp_key);
                        td_val.text(inp_val);
                        row.append(td_key);
                        row.append(td_val);
                        $("#tablist").append(row);
                        $("#inp_key").val("")
                        $("#inp_val").val("")
                        // Add the new key-value pair to the object
                        data[inp_key] = inp_val;
                        // Store the updated object in Chrome storage
                        chrome.storage.local.set({ 'myData': data }, function () {
                                console.log('Data stored.');
                        });
                }
        });
});
    





