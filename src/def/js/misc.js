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


/* START: *MODIFIED* PUBLIC SOURCE DERIVED CODE */
let userAgent = navigator.userAgent;
var browser;

if (userAgent.match(/edg/i)) {
  browser = "edge";
}
else if (userAgent.match(/opr\//i)) {
  browser = "opera";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
  browser = "chrome";
} else {
  browser = "other";
}
if (browser != "other") {
} else {
  $("#warn-not_compatible_browser").style.display = "block";
}
/* END: *MODIFIED* PUBLIC SOURCE DERIVED CODE */

console.log(
  "This web app is a product of \n███████╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗ \n██╔════╝██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝ \n█████╗  ██████╔╝██║██║     ██║   ██║██║  ██║█████╗ \n██╔══╝  ██╔═══╝ ██║██║     ██║   ██║██║  ██║██╔══╝ \n███████╗██║     ██║╚██████╗╚██████╔╝██████╔╝███████╗ \n╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝ \nAll rights reserved."
);
