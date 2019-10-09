const remote = require("electron").remote;
const ipc = require("electron").ipcRenderer;

// Retrieve focused window
var theWindow = remote.getCurrentWindow();

const appWin = document.getElementById("closeBtn");

appWin.addEventListener("click", () => {
  console.log("hello");
  // Close app
  theWindow.close();
});

const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", e => {
  ipc.send("update-notify-value", document.getElementById("notifyVal").value);
  theWindow.close();
});
