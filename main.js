const {win, BrowserWindow, app} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 8000,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }

    })
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)