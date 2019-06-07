// canon.js - quick and dirty log generator

var pino = require("pino")()


function heartbeat() {
    pino.info('Thump.');
 }

 setInterval(heartbeat, 1*1000); // do this every second