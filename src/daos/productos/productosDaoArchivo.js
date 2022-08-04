import { ContenedorArchivo } from "../../contenedores/ContenedorArchivo";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./src/Database/${filename}.json')
    }

    async desconectar() {
    }
};

export { ProductosDaoArchivo }