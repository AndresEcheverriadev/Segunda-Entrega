import express from 'express'
import { config } from './config/config.js'
import { productsRouter } from './routes/productsRouter';
import { cartsRouter } from './routes/cartsRouter';


const app = express();
const port = 8080;
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(config.server.routes.products, productsRouter);
app.use(config.server.routes.carts, cartsRouter);

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});

server.on("error", (error) => {
    console.error(`Error en el servidor ${error}`);
});