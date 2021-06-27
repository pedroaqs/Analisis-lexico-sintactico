const { app, BrowserWindow } = require("electron");
const path = require("path");
const crearVentanaPrincipal = () => {
  let ventanaPrincipal = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "/js/preloader.js"),
    },
  });
  ventanaPrincipal.loadFile(path.join(__dirname, "index.html"));
  ventanaPrincipal.maximize();
};

app.whenReady().then(crearVentanaPrincipal);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    crearVentanaPrincipal();
  }
});
