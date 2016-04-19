var app = require('app')
var BrowserWindow = require('browser-window')
var mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    'width': 270,
    'height': 400,
    'frame': true,
    'show': true
  })
  mainWindow.loadUrl('file://' + __dirname + '/translucent.html')
})

app.on('window-all-closed', function () {
  app.quit()
})
