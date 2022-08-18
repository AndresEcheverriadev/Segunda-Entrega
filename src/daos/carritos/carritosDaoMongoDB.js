import { ContenedorMongoDB } from "../../contenedores/ContenedorMongoDB.js"; 
import { CartSchema } from "../../schemas/CartSchema.js";

class CarritosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super({collection: 'carts', schema: CartSchema});
    }
};

export { CarritosDaoMongoDB }