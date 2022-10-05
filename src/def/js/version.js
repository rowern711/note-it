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

import { scythe } from "https://epicode.glitch.me//js/libraries/scythe/scythe.js";

var ss, ls, append, prepend, element, txt, atr;
ss = scythe.pkg.sessionStorage;
ls = scythe.pkg.localStorage;
append = scythe.pkg.element.append;
prepend = scythe.pkg.element.prepend;
element = scythe.pkg.element.create;
txt = scythe.pkg.element.text;
atr = scythe.pkg.element.attribute;

var data = ls.get("data");
var head = document.querySelector("head");

if (data == null) {
  autoupdate();
} else {
  var client = {
    version: JSON.parse(ls.get("data"))["client"]["version"],
  };
  if (client.version == null) {
    autoupdate();
  } else {
    $.get("/src/data/updates.json", function (data) {
      append(document.createComment("Version Scripts"), head);
      for (let i = 0; i < data[client.version]["scripts"].length; i++) {
        var script = element("script");
        atr(script, "v", client.version);
        atr(script, "src", data[client.version]["scripts"][i][0]);
        if (data[client.version]["scripts"][i][1] == "module") {
          atr(script, "type", "module");
        } else if (data[client.version]["scripts"][i][2] == "defer") {
        }
        append(script, head);
      }
      for (let i = 0; i < data[client.version]["stylesheets"].length; i++) {
        var style = element("link");
        atr(style, "v", client.version);
        atr(style, "rel", "stylesheet");
        atr(style, "href", data[client.version]["stylesheets"][i])
        append(style, head);
      }
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
    ls.set("data", JSON.stringify(data_base));
    alert(
      "The latest version of Note It (" +
        latest_version +
        ") has been automatically installed."
    );
  });
}
