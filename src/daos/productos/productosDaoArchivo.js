import { ContenedorArchivo } from "../../contenedores/ContenedorArchivo";
import { config } from '../../config/config.js'

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super(config.archivodb.products);
    }

    async desconectar() {
    }
};

export { ProductosDaoArchivo }