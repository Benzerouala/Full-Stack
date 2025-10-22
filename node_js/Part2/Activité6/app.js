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



//1. Que signifie "non-bloquant" dans le contexte du module fs ?
//Non-bloquant signifie que les opérations d'entrée/sortie ne bloquent pas l'exécution du code.
//2. Comment les événements permettent-ils de découpler les modules ?
//Les événements créent une communication indirecte via le pattern Observer/Pub-Sub.
//3. Pourquoi un serveur HTTP Node peut-il gérer des milliers de connexions avec un seul thread ?
//Grâce à l'Event Loop et au modèle asynchrone non-bloquant.
//Principe :

//1 thread principal pour JavaScript
//I/O déléguées au système (via libuv)
//Callbacks appelées quand les I/O sont terminées
//Pas d'attente : pendant une I/O, le thread traite d'autres requêtes
//4. Quelle serait la prochaine étape ?
//A. Express.js

//Framework web pour simplifier le routage
//Gestion automatique du JSON
//Middleware intégrés