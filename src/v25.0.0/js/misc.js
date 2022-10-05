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
$class = scythe.pkg.classList;


$("#btn-continue-browser").onclick = function () {
  $class.add($("#warn-not_compatible_browser"), "page-out");
  setTimeout(function () {
    $("#warn-not_compatible_browser").style.display = "none";
  }, 1000);
};
$("#btn-continue-iframe").onclick = function () {
  $class.add($("#warn-not_compatible_iframe"), "page-out");
  setTimeout(function () {
    $("#warn-not_compatible_iframe").style.display = "none";
  }, 1000);
};

setTimeout(function() {$("#loadingScreen").remove()}, 1000)

alert('/src/v25.0.0/js/misc.js')