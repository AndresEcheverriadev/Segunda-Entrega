import mongoose from "mongoose";
import { ContenedorMongoDB } from "../../contenedores/ContenedorMongoDB"; 
import { productosSchema } from "../../schemas/ProductosSchema";

class ProductosDaoArchivo extends ContenedorMongoDB {
    constructor() {
        super(mongoose.model('productos',productosSchema))
    }

    async desconectar() {
    }

};

export { ProductosDaoArchivo }