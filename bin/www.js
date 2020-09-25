//Configuracion de producción
var app = require('../app');
var http = require('http');
const { debug } = require('console');

//Obteniendo el puerto de prueba y producción
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Creando el servidor
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//Función para normalizar el puerto 
function normalizePort(val){
    var port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false

}

//Función para el evento de error de el servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    //Mostrando mensajes de errores especificos
    switch (error.code){
        case 'EACCES':
            console.error(bind + ' Es requerido priivilegios elevados');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' Esta en uso actualmente');
            process.exit(1);
            break;
        default:
            throw error;
    }
 }

 //Evento que escucha al evento 'listening' del servidor http
 function onListening(){
     var addr = server.address();
     var bind = typeof addr === ' string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
 }
