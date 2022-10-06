// if (document.addEventListener) {
//   document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//   }, false);
// } else {
//   document.attachEvent('oncontextmenu', function() {
//     window.event.returnValue = false;
//   });
// }
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
(function () {
  const preventDefault = (e) => e.preventDefault();
  const keydown = (e) => {
    if (
      (event.ctrlKey && (event.keyCode === 73 || event.keyCode === 74)) ||
      event.keyCode === 123
    ) {
      preventDefault(e);
    }
  };

  window.addEventListener("contextmenu", preventDefault);
  window.addEventListener("keydown", keydown);

  (function () {}.constructor("debugger")());
  const t = 100

  setInterval(function () {
    var before = new Date().getTime();
    (function () {}.constructor("debugger")());
    var after = new Date().getTime();
    if (after - before > t) {
      window.location.reload();
    }
  }, 200);
})();
