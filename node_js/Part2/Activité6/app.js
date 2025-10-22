const http = require('http');
const Logger = require('./logger');

// Création d'une instance du Logger
const logger = new Logger();

// Configuration du port
const PORT = 4000;

// Écoute de l'événement personnalisé
logger.on("messageLogged", (data) => console.log("Événement capturé :", data));

// Création du serveur HTTP
const server = http.createServer((req, res) => {
    // Log avec méthode HTTP, URL et IP du client
    logger.log(`Requête ${req.method} reçue : ${req.url} depuis ${req.socket.remoteAddress}`);
    res.end("Requête enregistrée !");
});

// Démarrage du serveur
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT} ...`));
