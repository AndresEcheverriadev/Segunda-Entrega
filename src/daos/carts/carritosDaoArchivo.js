import { ContenedorArchivo } from "../../contenedores/ContenedorArchivo";
import { config } from '../../config/config.js'

class CarritosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super(config.archivodb.carts);
    }

    async desconectar() {
    }
};

export { CarritosDaoArchivo  }