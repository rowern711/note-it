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
  version: data
  // function () {
  //   JSON.parse(localStorage.getItem("data"))["client"]["version"];
  // },
};

console.log(client.version);

if (data == null) {
  func.autoupdate();
} else {
  if (client.version == null) {
    func.autoupdate();
  }
}

var func = {
  autoupdate: function () {
    $.get("/src/data/updates.json", function (data) {
      var latest_version = data["latest_version"];
      var data_base = {
        app: {
          version: latest_version,
        },
      };
      localStorage.setItem("data", JSON.stringify(data_base));
      alert(
        "The latest version of Note It (v" +
          latest_version +
          ") has been automatically installed."
      );
    });
  },
};

// var version = JSON.parse(ls.get("data"))["app"]["version"];

// JSON.parse(localStorage.getItem("data"))["client"]["version"]
