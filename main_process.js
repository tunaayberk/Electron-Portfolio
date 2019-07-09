// Basic init
const electron = require("electron");
const { app, BrowserWindow, protocol } = electron;
const path = require("path");

// Let electron reloads by itself when webpack watches changes in ./app/
require("electron-reload")(__dirname);

// To avoid being garbage collected
let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  protocol.registerFileProtocol(
    "atom",
    (request, callback) => {
      const url = request.url.substr(7);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    error => {
      if (error) console.error("Failed to register protocol");
    }
  );

  mainWindow.loadURL(`file://${__dirname}/build/index.html`);
});
