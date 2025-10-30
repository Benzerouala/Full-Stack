const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Bienvenu sur mon premier serveur Express');
});
// Discussion
// 1/Différence avec Node.js natif :
// Express simplifie énormément le code. Avec Node.js natif, il faut parser
// manuellement les URLs, gérer les méthodes HTTP, et écrire beaucoup de code conditionnel.
// 2/Ce qu'Express gère : Le routing, le parsing des requêtes, la gestion automatique des headers HTTP, et une structure plus claire du code.
// Récupère un produit spécifique

// GET /api/products - Liste tous les produits
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop'},
    { id: 2, name: 'phone'}
  ]);
});

// GET /api/products/:id - Récupère un produit par ID
app.get('/api/products/:id', (req, res) => {
  res.json({ message: `Produit ${req.params.id}`});
});



// http://localhost:3000/api/products
// http://localhost:3000/api/products/1
// 1)Apport du JSON : Format léger, facile à parser, universel, lisible par les humains et les machines.
// 1)Routes avec :id : Permet de cibler une ressource spécifique de manière RESTful et de rendre l'API scalable.

// Activité 3 — "Introduction aux Middlewares"

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});
app.get('/ping', (req, res) => {
  const duration = Date.now() - req.startTime;
  res.json({ duration: `${duration}ms` });
});
// 1)Rôle de next() : Passe le contrôle au middleware ou à la route suivante dans la chaîne.
// 2)Middleware global vs spécifique : Global s'applique à toutes les routes (app.use), spécifique s'applique à une route particulière.
// 3)Importance : Permettent de structurer le code, réutiliser la logique, et gérer l'authentification, logging, parsing, etc.


// Activité 4 — "Gestion d'erreurs express"
app.get('/api/crash', (req, res, next) => {
  const error = new Error('Erreur simulée');
  error.status = 500;
  next(error);
});
// Toutes les routes avant...

// Middleware de gestion d'erreurs (4 paramètres!)
app.use((err, req, res, next) => {
  console.error('Erreur détecté: ',err.message);
  res.status(500).json({
    error: err.message
  });
});

// 1)Placement en dernier : Car il a 4 paramètres (err, req, res, next) et Express doit d'abord essayer toutes les routes avant de catcher les erreurs.
// 2)throw vs next(err) : throw arrête l'exécution brutalement, next(err) passe l'erreur au gestionnaire d'erreurs de manière contrôlée.

// Activité 5 — "Fichiers statiques et JSON"

const fs = require('fs');
const path = require('path');


// Servir les fichiers statiques
app.use(express.static('public'));

// Version asynchrone (meilleure pratique)
app.get('/api/products', async (req, res) => {
   const data = fs.readFileSync('./data/products.json')
   const products = JSON.parse(data)
   res.json(products)
});


app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});

// 1)Différence : Fichier statique = servi tel quel par Express (HTML, CSS, images). Fichier JSON = lu, parsé et traité par le serveur.
// 2)Problème readFileSync : Bloque le thread principal, empêche le serveur de traiter d'autres requêtes pendant la lecture.
// 3)Version asynchrone : Utiliser fs.promises.readFile() avec async/await pour ne pas bloquer le serveur.