const remote = require("electron").remote;
// Retrieve focused window
var theWindow = remote.getCurrentWindow();

const appWin = document.getElementById("closeBtn");

appWin.addEventListener("click", () => {
  console.log("hello");
  // Close app
  theWindow.close();
});
