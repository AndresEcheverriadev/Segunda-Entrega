import { ContenedorFirebase } from "../../contenedores/ContenedorFirebase.js"; 
import { config } from '../../config/config.js'

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super({collection:config.Firebase.productosCollection});
    }
};

export { ProductosDaoFirebase }