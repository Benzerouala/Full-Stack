//Etape 1
// const PI = 3.14;
// function calculeAire(rayon){
//     return PI*rayon*rayon
// }
// console.log(calculeAire(2));
// const PI = 3.14;
// function calculeAire(rayon){
//     return PI*rayon*rayon
// }
// console.log(calculeAire(2));
// Le code plante car les deux fichiers utilisent la même variable x.

// Dans de gros projets, les variables globales peuvent entrer en conflit et casser le programme.

// Chaque fichier est isolé dans son propre module. Les variables ne sont pas globales, elles appartiennent au fichier où elles sont déclarées.


//Etape 2
// const saluer  = require("./utilities/greet");
// const direAuRevoir  = require("./utilities/direAuRevoir");
// console.log(direAuRevoir("Ossama"))
// console.log(saluer("Ossama"))
const utilities = require('./utilities/greet');

console.log(utilities.saluer('Ossama'));
console.log(utilities.direAuRevoir('Ossama'));


//module.exports = fonction : utile pour exporter une seule fonction principale.
//module.exports = { ... } : utile pour regrouper plusieurs fonctions dans un même module.