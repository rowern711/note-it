// CUSTOMIZABLE VAR
var inp = "$user % ";
var out = "> ";
var ver = "1.9.2";
var img =
  "https://epicode-assets.glitch.me/assets/Note It Logo Square.png";
var msg = {
  initiated: function(ver) {
    return "> Terminal v" + ver + " initiated."
  },
  notFound: function () {
    return "Command not found.";
  },
  terminated: function () {
    return "Process terminated.";
  },
  
};
var chose = 1;
var commands = [
  "/src/data/commands.json"
];
var get = {
  time: function () {
    function time() {
      return (
        "[" +
        String(date.getHours()).padStart(num_length, "0") +
        "." +
        String(date.getMinutes()).padStart(num_length, "0") +
        "." +
        String(date.getSeconds()).padStart(num_length, "0") +
        // "." +
        // String(date.getMilliseconds()).padStart(num_length, "0") +
        "] "
      );
    }

    var date = new Date(localStorage.getItem("timeis"));

    var num_length = 2;
    var getTime = localStorage.getItem("time");
    if (getTime == null) {
      localStorage.setItem("time", "false");
      var time = "";
    } else if (getTime == "true") {
      var time = time();
    } else {
      var time = "";
    }
    return time;
  },
};
/*
 * Visual change: +0.2;
 * Functionality change: +0.4;
 * Complete update: +1.1;
 */
// var img = "https://tny.im/sSl";
// var img = "/app/terminal/TerminalLogo.png";

// FUNCTIONS
var init = {
  use: function (getCommands) {
    $.get(commands[getCommands - 1], function (data) {
      var input = document.querySelector("#input").innerText;
      var find = input
        .toLowerCase()
        .replaceAll("~", ".")
        .replace(
          /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\[|\{|\]|\}|\||\|\;|\"|\'|\,|\<|\>|\?|\/|\\/g,
          ""
        )
        .replaceAll(":", "")
        .replaceAll(";", "")
        .replaceAll("  ", "");
      var search = data[find];
      if (sessionStorage.getItem("last_user") == null) {
        var last = "";
      } else {
        var last = sessionStorage.getItem("last_user");
      }
      var pre =
        last +
        '<span class="user">' +
        inp +
        document.querySelector("#input").innerText +
        "</span> <br>" +
        get.time() +
        out;
      var done = "";
      if (search == undefined) {
        document.querySelector("#response").innerHTML +=
          pre + msg.notFound() + done;
        init.newLine();
        init.down();
      } else {
        var n = "<br>>";
        document.querySelector("#response").innerHTML +=
          pre +
          search
            .replaceAll("[n]", n)
            .replaceAll("[rand]", Math.floor(Math.random() * 1000) + 1)
            .replaceAll("[script", "<img src='" + img + "'")
            .replaceAll("/]", "/>")
            .replaceAll("[", "<")
            .replaceAll("]", ">")
            .replaceAll(n, "<br>" + get.time() + ">") +
          done;
        init.newLine();
        init.down();
      }
    });
  },
  focus: function () {
    document.querySelector("#input").focus();
  },
  newLine: function (type) {
    sessionStorage.setItem("last_user", get.time());
    document.querySelector("#pre").innerText = get.time() + inp;
    document.querySelector("#pre").style.display = "none";
    document.querySelector("#input").style.display = "none";

    document.querySelector("#response").innerHTML += "<br>";
    document.querySelector("#input").innerHTML = "";
    setTimeout(function () {
      document.querySelector("#blinker").style.display = "inline-block";
      document.querySelector("#pre").style.display = "";
      document.querySelector("#input").style.display = "";
      document.querySelector("#input").focus();
    }, 400);
  },
  down: function () {
    document.querySelector("#blinker").scrollIntoView();
  },
  type: function (str, cat, interval) {
    document.querySelector("#input").contentEditable = false;
    document.querySelector("#input").innerText = "";
    var arr = str.split("");
    document.querySelector("#input").innerText += arr[0];
    if (interval == null) {
      var interval = 160;
    } else {
    }
    var down = true;
    for (let i = 1; i < Number(arr.length); i++) {
      var p = setTimeout(function () {
        if (cat == 1) {
          document.querySelector("#response").innerHTML += arr[i];
        } else {
          document.querySelector("#input").innerText += arr[i];
        }
        if (down == true) {
          init.down();
        }
      }, i * interval);
    }
    setTimeout(function () {
      clearInterval(p);
      init.use(chose);
      setTimeout(function () {
        document.querySelector("#input").contentEditable = true;
      }, arr.length * interval + 300);
    }, arr.length * interval + 200);
  },
};
// INITIAL FUNCTIONS
localStorage.setItem("timeis", new Date());
setInterval(function date() {
  localStorage.setItem("timeis", new Date());
}, 1);
document.querySelector("#welcome").innerText =
  get.time() + msg.initiated(ver);
init.focus();
init.newLine();
let userAgent = navigator.userAgent;
var browser;

// if (userAgent.match(/edg/i)) {
//   browser = "edge";
// }
// else if (userAgent.match(/opr\//i)) {
//   browser = "opera";
// } else
if (userAgent.match(/chrome|chromium|crios/i)) {
  browser = "chrome";
} else {
  browser = "other";
}
if (browser == "other") {
  document.querySelector("#else").innerHTML = "";
  document.querySelector("#response").innerHTML +=
    get.time() +
    '> <span style="color: red;">Terminal could not be loaded properly.</span>';
}
setTimeout(function () {
  if (document.querySelector("#pre").innerText == "") {
    document.querySelector("#response").innerText +=
      get.time() + "> Terminal could not be loaded properly.";
  }
}, 2500);
if (localStorage.getItem("help") == "false") {
  document.querySelector("#input").contentEditable = true;
} else {
  setTimeout(function () {
    document.querySelector("#input").contentEditable = false;
    init.type(".help");
  }, 1000);
}
window.addEventListener("online", () => connection.type(1));
window.addEventListener("offline", () => connection.type(0));
// connection(1)
var connection = {
  type: function (status) {
    var delay = 1000;
    if (status == 0) {
      setTimeout(function () {
        document.querySelector("#response").innerHTML +=
          get.time() +
          '> <span style="color: red;">Terminal disconnected.</span><br>';
        document.querySelector("#pre").style.display = "none";
        document.querySelector("#input").style.display = "none";
        document.querySelector("#input").contentEditable = false;
        document.querySelector("#blinker").style.display = "none";
      }, delay);
    } else if (status == 1) {
      document.querySelector("#response").innerHTML +=
        get.time() +
        '> <span style="color: #00FF00;">Terminal connected.</span><br>';
      setTimeout(function () {
        document.querySelector("#pre").style.display = "";
        document.querySelector("#input").contentEditable = true;
        // document.querySelector("#input").innerHTML = "";
        document.querySelector("#input").style.display = "";
        document.querySelector("#blinker").style.display = "inline-block";
      }, delay);
    } else {
      return "invalid status";
    }
  },
};
function alert(msg) {
  var delay = 1000;
  document.querySelector("#pre").style.display = "none";
  document.querySelector("#input").contentEditable = false;
  document.querySelector("#input").style.display = "none";
  document.querySelector("#blinker").style.display = "none";
  document.querySelector("#response").innerHTML +=
    get.time() + '> returned "' + msg + '"<br>';
  setTimeout(function () {
    document.querySelector("#pre").style.display = "";
    document.querySelector("#input").contentEditable = true;
    document.querySelector("#input").style.display = "";
    document.querySelector("#blinker").style.display = "inline-block";
  }, delay);
}
// EVENTS
document.querySelector("#input").addEventListener("keypress", (evt) => {
  if (evt.which === 13) {
    evt.preventDefault();
    init.use(chose);
    init.down();
  }
});
document.querySelector("#input").addEventListener("paste", function (e) {
  e.preventDefault();
  return false;
});
window.addEventListener(
  "keydown",
  (e) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
      e.preventDefault();
    }
  },
  false
);
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  } else if (event.which === 9) {
    // document.querySelector("#wrap").style.display = "none";
    document.querySelector("#wrap").remove();
    document.body.innerHTML =
      "<pre>" +
      get.time() +
      '> <span style="color: red;">Process terminated.</span></pre>';
    throw new Error(msg.terminated());
    return false;
  }
});
document.addEventListener("contextmenu", (event) => event.preventDefault());
