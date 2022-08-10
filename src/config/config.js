
const port = 8080;

const db = {
    mongo: 'mongo',
    filesystem : 'filesystem',
    memory: 'memory',
    firebase: 'firebase'
};

const config =  {
    persistences: DBS,
    Archivodb: {
    products: "productos",
    carts: "carritos",
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