const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function () {
  // Create new window
  mainWindow = new BrowserWindow(
    {
      webPreferences: {
        nodeIntegration: true
      }
    }
  );  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
  // Quit app when closed
  mainWindow.on('closed', function () {
    app.quit();
  });
});