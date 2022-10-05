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

var $, ss, ls, move, loc, $class, append, prepend, element, txt, atr, getRandom;
$ = scythe.pkg.query;
ss = scythe.pkg.sessionStorage;
ls = scythe.pkg.localStorage;
move = scythe.pkg.element.move;
loc = scythe.pkg.element.location;
$class = scythe.pkg.classList;
append = scythe.pkg.element.append;
prepend = scythe.pkg.element.prepend;
element = scythe.pkg.element.create;
txt = scythe.pkg.element.text;
atr = scythe.pkg.element.attribute;
getRandom = scythe.pkg.random;

window.onload = function () {
  setTimeout(function () {
    if ($("#loadingScreen") == null) {
    } else {
      var cache = {
        clear: function c() {
          var data = JSON.parse(localStorage.getItem("data"));
          data["client"] = "";
          var str = JSON.stringify(data);
          localStorage.setItem("data", str);
          location.reload();
        },
      };
      document.body.innerHTML =
        'There was an error loading the page. Please reload or click <a href="javascript:cache.clear()">here</a> to clear client cache.';
    }
  }, 2000);
};
