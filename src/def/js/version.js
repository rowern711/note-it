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
var head = document.querySelector("head");

var update_data = "/src/data/updates.json";

check();

var msg = {
  installed: {
    title: function (latest) {
      return "Welcome to Note It!";
    },
    content: function (latest) {
      return (
        "The newest update of Note It (" +
        latest +
        ") has been automatically installed! Go to the Update Center in settings to learn more."
      );
    },
  },
  update: {
    title: function (client, latest) {
      return "New update of Note It!";
    },
    content: function (client, latest) {
      return (
        "You currently have Note It " +
        client +
        ". Go to Update Center in settings to install Note It " +
        latest +
        "."
      );
    },
  },
};

function check() {
  if (ls.get("data") == null) {
    $.get(update_data, function (data) {
      var latest_version = data["latest_version"];
      var data_base = {
        client: {
          version: latest_version,
          update_notification: {},
        },
      };
      ls.set("data", JSON.stringify(data_base));
      alert(
        msg.installed.title(),
        msg.installed.content(latest_version)
      );
      check();
    });
  } else {
    var client = {
      version: JSON.parse(ls.get("data"))["client"]["version"],
    };
    if (client.version == null) {
      $.get(update_data, function (data) {
        var latest_version = data["latest_version"];
        var data_base = {
          client: {
            version: latest_version,
            update_notification: {},
          },
        };
        ls.set("data", JSON.stringify(data_base));
        alert(
          msg.installed.title(),
          msg.installed.content(latest_version)
        );
        check();
      });
    } else {
      $.get(update_data, function (data) {
        var latest_version = data["latest_version"];
        if (
          JSON.parse(ls.get("data"))["client"]["update_notification"][
            latest_version
          ] == "true"
        ) {
        } else {
          if (client.version !== latest_version) {
            alert(
              msg.update.title(),
              msg.update.content(client.version, latest_version)
            );
            var dat = JSON.parse(ls.get("data"));
            dat["client"]["update_notification"][latest_version] = "true";
            ls.set("data", JSON.stringify(dat));
          }
        }
        append(document.createComment("Version Scripts"), head);
        for (let i = 0; i < data[client.version]["stylesheets"].length; i++) {
          var style = element("link");
          atr(style, "v", client.version);
          atr(style, "rel", "stylesheet");
          atr(style, "href", data[client.version]["stylesheets"][i]);
          append(style, head);
        }
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
      });
    }
  }
}
