const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require("axios");

const notifyBtn = document.getElementById("notifyBtn");
const price = document.querySelector("h1");
const targetPrice = document.getElementById("targetPrice");

function getBTC() {
  axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD"
    )
    .then(res => {
      const cryptos = res.data.BTC.USD;
      price.innerHTML = "$" + cryptos.toLocaleString("en");
    });
}

getBTC();
setInterval(getBTC, 30000);

notifyBtn.addEventListener("click", e => {
  const modalPath = path.join("file://", __dirname, "add.html");
  let win = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    //set this to false as its a security issue where users can run malicious code from remote sources if u r loading remote content
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.on("close", function() {
    win = null;
  });
  // Open the DevTools.
  //   win.webContents.openDevTools();
  win.loadURL(modalPath);
  win.show();
});
