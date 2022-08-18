import { ContenedorMongoDB } from "../../contenedores/ContenedorMongoDB.js"; 
import { ProductosSchema } from "../../schemas/ProductosSchema.js";

class ProductosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super({collection: 'productos', schema: ProductosSchema});
    }
};

export { ProductosDaoMongoDB }