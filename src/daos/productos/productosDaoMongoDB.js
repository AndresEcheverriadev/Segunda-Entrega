import { ContenedorMongoDB } from "../../contenedores/ContenedorMongoDB"; 
import { ProductosSchema } from "../../schemas/ProductosSchema";

class ProductosDaoMongo extends ContenedorMongoDB {
    constructor() {
        super({collection: 'productos', schema: ProductosSchema});
    }
};

export { ProductosDaoMongo }