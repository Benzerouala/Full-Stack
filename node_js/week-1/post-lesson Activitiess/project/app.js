const { ajouterContact, listerContacts } = require('./contactService');
const formaterContact = require('./utils/format');

ajouterContact("Ossama", "0608080000");
ajouterContact("Med", "0611111111");

listerContacts().forEach(c => console.log(formaterContact(c)));

// 1. Quelle est la responsabilité de chaque module ?

// contactService.js : gère la logique métier — il s’occupe d’ajouter et de lister les contacts (données et opérations).

// utils/format.js : gère le formatage de l’affichage — il définit comment un contact doit être présenté (mise en forme du texte).

// app.js : c’est le point d’entrée de l’application — il orchestre le programme en utilisant les fonctions des autres modules.

// ⚙️ 2. Pourquoi séparer le formatage, la logique et le point d’entrée ?

// Cela permet d’avoir un code plus clair et mieux organisé.

// Chaque fichier a une responsabilité unique, donc plus facile à comprendre et à modifier.

// Si on veut changer seulement la présentation ou la logique, on n’a pas besoin de toucher au reste.

// 🔧 3. Comment cela faciliterait la maintenance à long terme ?

// Les fichiers sont indépendants, donc plus simples à tester et à mettre à jour.

// Si une erreur apparaît dans une partie, elle n’affecte pas tout le programme.

// Cela rend le projet évolutif : on peut ajouter d’autres fonctionnalités (par ex. suppression ou recherche de contacts) sans casser le reste du code.