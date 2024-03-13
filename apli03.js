// Definiendo constante http que permite realizar solicitudes http
const http = require('http')

// Definiendo que permite la lectura de archivos html
fs = require('fs')

// Definiendo el host
const host = '127.0.0.1'
// Definiendo el puerto por el cual se ejecuctará
const port = 3000

const server = http.createServer(( req, res) => {
    // Estamos ejecutando en modo asincrono 
    fs.readFile('./index.html', function (error, html){
        // Estamos leyendo en texto plano
    res.writeHead( 200, {'context-type':'text/html'})
    // Leyendo el archivo html
    res.write(html)
    // Terminando la sesion
    res.end()
    });

})
// Llamando al puerto y host para que sea escuchado al momento de la ejecución
server.listen( port, host, () => {
    console.log("servidor funcionando en:", host, port)
});