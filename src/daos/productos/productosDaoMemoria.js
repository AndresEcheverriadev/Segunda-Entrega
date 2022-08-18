import { ContenedorMemoria } from "../../contenedores/ContenedorMemoria.js";

class ProductosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super();
    }

    async desconectar() {
    }
};

export { ProductosDaoMemoria }