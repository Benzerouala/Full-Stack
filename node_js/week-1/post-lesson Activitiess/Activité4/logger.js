const EventEmitter =require("events");
class Logger extends EventEmitter{
    log(message){
        console.log("log: ", message);
        this.emit("messageLogged",{message,date:new Date()})
    }
}
module.exports = Logger;

// 1)Différence :
// Une instance directe d’EventEmitter sert juste à émettre et écouter des événements.
// Une classe qui étend EventEmitter te permet de créer ton propre objet (par exemple un Logger)
//  qui peut émettre des événements et contenir sa propre logique et ses propres méthodes.
// 2)Pourquoi encapsuler la logique dans une classe :
// Parce que cela rend ton code mieux organisé, plus réutilisable et plus facile à maintenir.