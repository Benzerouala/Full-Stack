const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du dossier :", err);
        return;
    }

    console.log(`\n${files.length} fichier(s) trouvé(s) :`);
    console.log(files.join('\n'));

    // Afficher le chemin complet de chaque fichier
    files.forEach(f => console.log(path.join(__dirname, f)));

    // Créer le message de log
    const logMessage = `[${new Date().toLocaleString()}] ${files.length} fichier(s) trouvé(s)\n`;

    // Écrire le message dans log.txt
    fs.appendFile('log.txt', logMessage, (err) => {
        if (err) {
            console.error("Erreur lors de l'écriture du log :", err);
        } else {
            console.log('\n✓ Informations enregistrées dans log.txt');
        }
    });
});
