const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain, remote} = electron;
const ipc = require('electron').ipcRenderer;

let main;
let windowSchedule;

app.on('ready', () => {
    main = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    main.maximize();

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    main.on('close', function(){
        app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function addwindowSchedule(){
    windowSchedule = new BrowserWindow({
        title: 'Jadwal',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    windowSchedule.maximize();

    // ipc.send('load-page', 'file://' + __dirname + '/scheduleWindow.html');
    // main.loadURL("github.com")
    windowSchedule.webContents.toggleDevTools();
    windowSchedule.loadURL(url.format({
        pathname: path.join(__dirname, 'scheduleWindow.html'),
        protocol: 'file',
        slashes: true
    }));
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label:'Bel'
            },
            {
                label:'Keluar',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Jadwal',
        click(){
            addwindowSchedule();
        }
    }
]