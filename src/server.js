import express from 'express'
import { config } from './config/config.js'
import { productsRouter } from './routes/productsRouter.js';
import { cartsRouter } from './routes/cartsRouter.js';
import { MongoDBService } from "../src/services/mongoDBService.js";
import { FirebaseService } from "../src/services/firebaseService.js";


const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(config.server.routes.products, productsRouter);
app.use(config.server.routes.carts, cartsRouter);

MongoDBService.initMongoDB(); 
FirebaseService.initFirebase(); 

const server = app.listen(config.server.port, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on("error", (error) => {
    console.error(`Error en el servidor ${error}`);
});