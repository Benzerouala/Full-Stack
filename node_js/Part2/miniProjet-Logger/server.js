// server.js - Serveur HTTP pour afficher les logs
const http = require('http');
const fs = require('fs');
const os = require('os');

const PORT = 3000;

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Route principale
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Node System Logger</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background-color: #f5f5f5;
                    }
                    h1 {
                        color: #333;
                    }
                    .links {
                        margin-top: 20px;
                    }
                    a {
                        display: block;
                        margin: 10px 0;
                        padding: 10px;
                        background-color: #007bff;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        text-align: center;
                    }
                    a:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <h1>🖥️ Bienvenue sur le Node System Logger</h1>
                <p>Ce serveur permet de surveiller l'activité du système et de consulter les logs.</p>
                <div class="links">
                    <a href="/logs">📄 Voir les Logs</a>
                    <a href="/stats">📊 Statistiques Système (JSON)</a>
                </div>
            </body>
            </html>
        `);
    }
    
    // Route pour afficher les logs
    else if (req.url === '/logs') {
        fs.readFile('log.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Fichier log.txt introuvable. Assurez-vous que monitor.js est en cours d\'exécution.');
                return;
            }
            
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(data || 'Aucun log disponible pour le moment.');
        });
    }
    
    // Route pour les statistiques en JSON (bonus)
    else if (req.url === '/stats') {
        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        const uptime = os.uptime();
        const freeMemPercent = (freeMem / totalMem) * 100;

        const stats = {
            timestamp: new Date().toISOString(),
            memory: {
                free: `${(freeMem / 1024 / 1024 / 1024).toFixed(2)} GB`,
                total: `${(totalMem / 1024 / 1024 / 1024).toFixed(2)} GB`,
                freePercent: `${freeMemPercent.toFixed(2)}%`
            },
            uptime: {
                seconds: uptime,
                minutes: Math.floor(uptime / 60),
                hours: (uptime / 3600).toFixed(2)
            },
            platform: os.platform(),
            hostname: os.hostname(),
            cpus: os.cpus().length
        };

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(stats, null, 2));
    }
    
    // Route non trouvée
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Page non trouvée');
    }
});

// Démarrer le serveur
server.listen(PORT, () => {
    console.log(`🌐 Serveur HTTP démarré sur http://localhost:${PORT}`);
    console.log(`   📄 Logs disponibles sur: http://localhost:${PORT}/logs`);
    console.log(`   📊 Stats JSON sur: http://localhost:${PORT}/stats`);
});