import { ContenedorMongoDB } from "../../contenedores/ContenedorMongoDB"; 
import { CartSchema } from "../../schemas/CartSchema";

class CarritosDaoMongo extends ContenedorMongoDB {
    constructor() {
        super({collection: 'carts', schema: CartSchema});
    }
};

export { CarritosDaoMongo }