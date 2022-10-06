if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}
// if (location.hash == "#a=nr") {
// } else {
//   var sub = "note-it";
//   if (location.host != sub + ".eightclan.me") {
//     location.host = sub + ".eightclan.me";
//   }
// }
if (window.self !== window.top) {
  document.getElementById("warn-not_compatible_iframe").style.display = "block";
}
