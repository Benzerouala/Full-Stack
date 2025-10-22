// Importation du module http natif de Node.js
const http = require('http');

// Définition du port
const PORT = 3000;

// Création du serveur HTTP
// La fonction callback est exécutée pour CHAQUE requête reçue
const server = http.createServer((req, res) => {
    // req (request) : objet contenant les informations de la requête
    // res (response) : objet permettant d'envoyer la réponse au client
    
    // Routage basé sur l'URL de la requête
    if (req.url === '/') {
        // Route principale - Page d'accueil
        res.write("Bienvenu sur notre serveur Node.js")
        res.end();
    } else if (req.url === '/api/etudiants') {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(["Ossama","Med","Islam"]); // Type JSON
        
    } 
    else {
        res.writeHead(404);
        res.end("Page non trouvé")
    }
});

// Démarrage du serveur sur le port spécifié
// La callback est appelée une fois que le serveur est prêt
server.listen(PORT, () => {
    console.log('Serveur en écoute sur le port :3000.... ');
   });