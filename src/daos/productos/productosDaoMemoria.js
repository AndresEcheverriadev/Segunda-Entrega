import { ContenedorMemoria } from "../../contenedores/ContenedorMemoria";

class ProductosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super();
    }

    async desconectar() {
    }
};

export { ProductosDaoMemoria }