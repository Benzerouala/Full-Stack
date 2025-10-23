const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter {
    log(message) {
        const logMessage = `${new Date().toISOString()} - ${message}\n`;
        fs.appendFile(path.join(__dirname, "log.txt"), logMessage, (err) => {
            if (err) return console.error("Erreur écriture log :", err);
            this.emit("messageLogged", { message, date: new Date() });
        });
    }
}

module.exports = Logger;
