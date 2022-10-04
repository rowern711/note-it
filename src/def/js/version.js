/* 
ALL CODE IS PURLEY ORIGINAL.

YOU MAY NOT COPY, MODIFY, MERGE, PUBLISH, DISTIBUTE, SUBLICENCE, AND/OR SELL THE CODE. 

This web app is a product of

███████╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝
█████╗  ██████╔╝██║██║     ██║   ██║██║  ██║█████╗  
██╔══╝  ██╔═══╝ ██║██║     ██║   ██║██║  ██║██╔══╝  
███████╗██║     ██║╚██████╗╚██████╔╝██████╔╝███████╗
╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝

All rights reserved.    
*/

var data = localStorage.getItem("data");
var client = {
  version: JSON.parse(localStorage.getItem("data"))["client"]["version"],
};

if (data == null) {
  autoupdate();
} else {
  if (client.version == null) {
    autoupdate();
  } else {
    $.get("/src/data/updates.json", function (data) {
      data[client.version]["scripts"]
    });
  }
}

function autoupdate() {
  $.get("/src/data/updates.json", function (data) {
    var latest_version = data["latest_version"];
    var data_base = {
      client: {
        version: latest_version,
      },
    };
    localStorage.setItem("data", JSON.stringify(data_base));
    alert(
      "The latest version of Note It (" +
        latest_version +
        ") has been automatically installed."
    );
  });
}
