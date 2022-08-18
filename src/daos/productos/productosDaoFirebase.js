import { ContenedorFirebase } from "../../contenedores/ContenedorFirebase.js"; 
import { ProductosSchema } from "../../schemas/ProductosSchema.js";

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super({collection: 'productos', schema: ProductosSchema});
    }
};

export { ProductosDaoFirebase }