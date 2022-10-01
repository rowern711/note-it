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

import { scythe } from "/js/static/scythe.js";

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


let userAgent = navigator.userAgent;
var browser;

if (userAgent.match(/edg/i)) {
  browser = "edge";
}
// else if (userAgent.match(/firefox|fxios/i)) {
//   browser = "firefox";
// }
// else if (userAgent.match(/safari/i)) {
//   browser = "safari";
// }
else if (userAgent.match(/opr\//i)) {
  browser = "opera";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
  browser = "chrome";
} else {
  browser = "other";
}
// alert(navigator.userAgent);
// alert(browser);
if (browser != "other") {
} else {
  $("#warn-not_compatible_browser").style.display = "block";
}
/* END *MODIFIED* PUBLIC SOURCE DERIVED CODE */

ss.remove("money");
ss.remove("total-machines");
for (let i = 0; i <= 10; i++) {
  ss.remove("total-level-" + i);
}

ss.remove("total-level");
ss.set("total-machines", "0");

if (ls.get("highscores") == null) {
  ls.set("highscores", [0, 0, 0]);
} else {
}

console.log(
  "This web app is a product of \n███████╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗ \n██╔════╝██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝ \n█████╗  ██████╔╝██║██║     ██║   ██║██║  ██║█████╗ \n██╔══╝  ██╔═══╝ ██║██║     ██║   ██║██║  ██║██╔══╝ \n███████╗██║     ██║╚██████╗╚██████╔╝██████╔╝███████╗ \n╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝ \nAll rights reserved."
);
console.log(
  'Well, you found the console! \nAs a reward, here\'s a cheat code.\nType "cheat(x)", where x can be any amount of money, into the console below and press enter. \nEnjoy! :)'
);