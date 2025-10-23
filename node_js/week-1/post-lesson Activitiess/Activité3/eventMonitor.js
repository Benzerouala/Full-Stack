// Importation du module events
const EventEmitter = require('events');

// Création d'une instance d'EventEmitter
const emitter = new EventEmitter();

// Enregistrer un écouteur pour l'événement 'utilisateurConnecté'
emitter.on('utilisateurConnecté', (data) => {
    console.log(`Nouvelle Connexion : ${data.nom} (${data.id})`);
});

// Émettre (déclencher) l'événement
emitter.emit('utilisateurConnecté', { id: 1, nom: "Ossama" });
//1)L'événement est perdu. EventEmitter ne stocke pas l'historique des événements. Les écouteurs doivent être enregistrés AVANT l'émission.
//2)Tous les écouteurs enregistrés seront appelés dans l'ordre d'enregistrement.
//Résulta :
        //Nouvelle Connexion : Ossama (1)