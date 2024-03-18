import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

//import clientesRoutes from './routes/clientes.routes.js'
import clientesRoutes from "./routes/clientes.routes.js";
import pedidosRoutes from "./routes/pedidos.routes.js";
// Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


// Settings
app.set('port', process.env.PORT || 3000)

// Configurando carpeta de vistas
app.set('views', join(__dirname, 'views'));

// Configurar motor de plantilla
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));

// Utilizamos express para trabajar con interfaces y formularios
// Utilizamos express para trabajar con archivos tipo json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.use(clientesRoutes)
app.use(pedidosRoutes)


// Public Files
// Function join, public los usuarios pueden utlizar lo que hay en la carpeta publica
app.use(express.static(join(__dirname, 'public')));

// Run server
app.listen(app.get('port'), () => 
console.log('cargando el puerto', app.get('port'))
);
