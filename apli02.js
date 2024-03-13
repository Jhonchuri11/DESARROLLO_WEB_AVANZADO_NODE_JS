// Definiendo constante http que permite realizar solicitudes http
const http = require('http')
// Definiendo el host
const host = '127.0.0.1'
// Definiendo el puerto por el cual se ejecuctará
const port = 3000

const server = http.createServer(( req, res) => {
    // Estamos leyendo en texto plano
    res.writeHead( 200, {'context-type':'text/plane'})
    // Mostrado en mensaje
    res.write("Hola Mundo actual JWCA")
    // Terminando la sesion
    res.end()
})
// Llamando al puerto y host para que sea escuchado al momento de la ejecución
server.listen( port, host, () => {
    console.log("servidor funcionando en:", host, port)
});