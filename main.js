const electron = require('electron')

// Control application life with app
const {app, BrowserWindow} = require('electron')
const path = require('path')

// Declare main window at top level so it is not garbage collected
let mainWindow;

function createWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    // Load index.html starting page
    mainWindow.loadURL(path.join('file://', __dirname, 'src/views/index.html'))
    
    // Open the DevTools
    mainWindow.webContents.openDevTools()

    // When the app is closed ensure all processes are also closed
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

// Quit app when all windows are closed
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
})