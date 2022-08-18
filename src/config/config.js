import dotenv from "dotenv";
dotenv.config();

const port = 8080;

const db = {
    mongo: 'mongo',
    filesystem : 'filesystem',
    memory: 'memory',
    firebase: 'firebase'
};

const config =  {
    persistences: db,
    Archivodb: {
    products: "productos",
    carts: "carritos",
    },
    MongoDB: {
        url: process.env.MongoURL,
        dbName: process.env.MongoDBName,
    },
    Firebase: {
        databaseURL: process.env.databaseURL
    },
    server: {
        port: process.env.port ?? port,
        dbSelector: process.env.dbSelector ?? db.filesystem,
        routes: {
            base: '/api',
            products: '/api/productos',
            carts: '/api/carrito'
        }
    }
};

export { config };