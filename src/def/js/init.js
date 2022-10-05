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

window.onload = function () {
  setTimeout(function () {
    if (document.querySelector("#loadingScreen") == null) {
    } else {
      document.body.innerHTML =
        'There was an error loading the page. Please reload or click <a href="javascript:cache.clear()">here</a> to clear client cache.';
    }
  }, 5000);
};

var cache = {
  clear: function () {
    var data = JSON.parse(localStorage.getItem("data"));
    data["client"] = "";
    var str = JSON.stringify(data);
    localStorage.setItem("data", str);
    location.reload();
  },
};
