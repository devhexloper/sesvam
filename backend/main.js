import { app, BrowserWindow } from "electron";
import path from "path";
import * as url from 'url';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      
    },
  });

  win.loadFile(path.resolve(__dirname, './../dist', 'index.html')); 
  console.log(`directorio: ${__dirname}`);
 // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform != "darwin") app.quit();
});