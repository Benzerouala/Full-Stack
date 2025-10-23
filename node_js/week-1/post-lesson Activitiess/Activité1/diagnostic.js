const os = require('os');

console.log('Plateforme:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus().length,"coeurs");
console.log('Mémoire totale:', os.totalmem());
console.log('Mémoire libre:', os.freemem());
console.log('Uptime (en heu):', (os.uptime() / 3600).toFixed(2));
//1)Quelle est la différence entre os.platform() et os.arch() ?
// Plateforme: win32
// Architecture: x64
// CPUs: 8 coeurs
// Mémoire totale: 8361132032
// Mémoire libre: 1635590144
// Uptime (en heu): 0.16
// ====>>os.platform() : Retourne le système d'exploitation (ex: 'linux', 'darwin', 'win32')

//2)À quoi pourrait servir cette information dans une application réelle ?
// ===>>>Installer la bonne version d’un logiciel ou d’une dépendance
// ===>>>Surveiller ou diagnostiquer le système