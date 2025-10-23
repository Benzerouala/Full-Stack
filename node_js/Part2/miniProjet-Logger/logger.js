// logger.js - Module de journalisation
const EventEmitter = require('events');
const fs = require('fs');

class Logger extends EventEmitter {
    constructor(filename = 'log.txt') {
        super();
        this.filename = filename;
    }

    // Méthode pour écrire dans le fichier log
    log(message) {
        const timestamp = this.getTimestamp();
        const logMessage = `[${timestamp}] ${message}\n`;
        
        // Écriture dans le fichier
        fs.appendFileSync(this.filename, logMessage, 'utf8');
        
        // Émettre un événement après l'écriture
        this.emit('messageLogged', logMessage);
    }

    // Méthode pour obtenir l'horodatage
    getTimestamp() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
}

module.exports = Logger;