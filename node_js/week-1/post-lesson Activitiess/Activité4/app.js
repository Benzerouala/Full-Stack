const Logger =require("./logger");
const logger = new Logger();
logger.on("messageLoggers",(data)=>{
    console.log("Evenement capturé :",data);
})
logger.log("Application démarer !")

