const {app, BrowserWindow, Menu} = require('electron')
const shell = require('electron').shell
//const ipc = requier('electron').ipc


let win

function createWindow() {
    win = new BrowserWindow( {width: 1000, height: 700})

    win.loadFile('src/index.html')

    win.on('closed', () => {
        win = null
    })

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu:[
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

