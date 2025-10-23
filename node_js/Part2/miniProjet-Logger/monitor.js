// monitor.js - Script de surveillance système
const os = require('os');
const Logger = require('./logger');

// Créer une instance du logger
const logger = new Logger('log.txt');

// Écouter l'événement messageLogged
logger.on('messageLogged', (message) => {
    console.log('✅ Message enregistré:', message.trim());
});

// Écouter l'événement lowMemory
logger.on('lowMemory', (data) => {
    console.log('⚠️  ALERTE: MÉMOIRE FAIBLE!');
    console.log(`   Mémoire libre: ${data.freeMemPercent.toFixed(2)}%`);
    console.log(`   Mémoire disponible: ${(data.freeMem / 1024 / 1024 / 1024).toFixed(2)} GB`);
});

// Fonction pour collecter les statistiques système
function collectSystemStats() {
    const freeMem = os.freemem();
    const totalMem = os.totalmem();
    const uptime = os.uptime();
    const freeMemPercent = (freeMem / totalMem) * 100;

    // Formater les données
    const stats = {
        freeMem: (freeMem / 1024 / 1024 / 1024).toFixed(2),
        totalMem: (totalMem / 1024 / 1024 / 1024).toFixed(2),
        uptime: Math.floor(uptime / 60),
        freeMemPercent: freeMemPercent.toFixed(2)
    };

    // Créer le message de log
    const logMessage = `Mémoire libre: ${stats.freeMem} GB / ${stats.totalMem} GB (${stats.freeMemPercent}%) | Uptime: ${stats.uptime} min`;
    
    // Enregistrer dans le log
    logger.log(logMessage);

    // Vérifier si la mémoire est faible (< 20%)
    if (freeMemPercent < 20) {
        logger.emit('lowMemory', {
            freeMem,
            totalMem,
            freeMemPercent
        });
    }

    return stats;
}

// Message de démarrage
console.log('🚀 Node System Logger - Surveillance démarrée');
console.log('📊 Collecte des statistiques toutes les 5 secondes...\n');

// Collecter immédiatement au démarrage
collectSystemStats();

// Collecter toutes les 5 secondes
setInterval(() => {
    collectSystemStats();
}, 5000);

// Exporter pour utilisation dans d'autres modules
module.exports = { logger, collectSystemStats };