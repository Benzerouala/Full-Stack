// console.log(__filename);
// console.log(__dirname);
// console.log(module);
// console.log(exports=== module.exports);

// exports.direSalut = () => console.log('Sallut!');
// console.log(module.exports)
// const mod = require('./test');
// mod.direSalut();

// __filename → chemin complet du fichier actuel.

// __dirname → dossier du fichier actuel.

// module → objet représentant le module courant.

// exports → raccourci vers module.exports.

//2) Pourquoi exports = fonction() ne marche pas : cela change la référence d’exports sans modifier module.exports.

//3) Relation : exports et module.exports pointent vers le même objet au départ.
