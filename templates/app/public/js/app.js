'use strict';

var gui = require('nw.gui');
var Window = gui.Window.get();

function minimize() {
    Window.minimize();
}

function toggleFullscreen() {
    Window.toggleKioskMode();
}

function closeWindow() {
    Window.close();
}
