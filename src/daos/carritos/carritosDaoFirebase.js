import { ContenedorFirebase } from "../../contenedores/ContenedorFirebase.js"; 
import { CartSchema } from "../../schemas/CartSchema.js";

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super({collection: 'carts', schema: CartSchema});
    }
};

export { CarritosDaoFirebase }