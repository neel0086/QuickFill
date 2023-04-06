// var selectedrow;
// var prevrow;
// function getMemory(callback) {
//         chrome.tabs.query({ currentWindow: true }, (tabs) => {
//                 const httpTabs = tabs.filter((tab) => /^http/.test(tab.url));
//                 const results = {};
//                 let waiting = httpTabs.length;

//                 httpTabs.forEach((tab) => {
//                         chrome.tabs.highlight({ 'tabs': tab.id }, function () { });
//                         chrome.tabs.executeScript(tab.id, { code: 'window.performance.memory.usedJSHeapSize' }, (memory) => {
//                                 results[tab.id] = { id: tab.id, memory: memory[0], title: tab.title };
//                                 waiting--;
//                                 if (waiting === 0) {
//                                         callback(results);
//                                 }
//                         });
//                 });
//         });
// }






// function selectRow() {
//         selectedrow = this;
//         this.style.backgroundColor = "#435560";
//         if (prevrow)
//                 prevrow.style.backgroundColor = "";
//         prevrow = this;

//         if (!this.getElementsByTagName("img")[0].classList.contains("hide")) {
//                 chrome.storage.local.get(['activeTimers'], (activeTimersres) => {
//                         let activeTimers = activeTimersres["activeTimers"];
//                         for (timer of activeTimers) {
//                                 if (timer.tabid == selectedrow.id) {
//                                         document.getElementById("warningplaceholder").textContent =
//                                                 "This tab is scheduled to close at " + timer.timestr;
//                                 }
//                         }
//                 });
//         } else
//                 document.getElementById("warningplaceholder").textContent = "";
// }




// getMemory((res) => {


//         for (tabid in res) {
//                 let row = document.createElement("tr");
//                 let name = document.createElement("td");
//                 let time = document.createElement("td");

//                 row.id = tabid;
//                 name.classList.add("inp_name");
//                 time.classList.add("inp_value")

//                 name.textContent = res[tabid].title;
//                 row.append(name);
//                 row.append(time)
//                 row.addEventListener("click", selectRow);
//                 document.getElementById("tablist").getElementsByTagName("tbody")[0].append(row);
//         }
// });


$(document).ready(function(){
        // Define the object to store the key-value pairs
        var data = {};
    
        // Retrieve stored data when the popup is opened
        chrome.storage.local.get('myData', function(result) {
            if (result.myData) {
                data = result.myData;
                // Add rows to the table for each key-value pair in the object
                $.each(data, function(key, value) {
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
    
        $(".addBtn").click(function(){
            var inp_key = $("#inp_key").val().trim();
            var inp_val = $("#inp_val").val().trim();
            console.log(inp_key, inp_val);
            if(inp_key.length > 0 && inp_val.length > 0){
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
                chrome.storage.local.set({'myData': data}, function() {
                    console.log('Data stored.');
                });
            }
        });
    });
    





