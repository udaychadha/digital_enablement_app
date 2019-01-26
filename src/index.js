const electron = require('electron')
const {dialog} = require('electron').remote
const Browserwindow = electron.remote.BrowserWindow
const {shell} = require('electron')


const browseButton = document.getElementById('browse-file')

browseButton.addEventListener('click', function(click) {
    var path = dialog.showOpenDialog({
        properties:['openFile']
    });
    console.log(path)
    
})