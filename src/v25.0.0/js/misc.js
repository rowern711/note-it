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

var start_blur = 40;
var interval_blur = 10;
var delay_blur = 1000;
for (let i = 0; i <= start_blur; i++) {
  setTimeout(function () {
    $("body").style.filter = "blur(" + Number(start_blur - i) + "px)";
  }, interval_blur * i);
}
setTimeout(function () {
  $("body").removeAttribute("style");
}, interval_blur * start_blur);

$("#loadingScreen").style.display = "none";
setTimeout(function () {
  $("#loadingScreen").remove();
}, delay_blur);
