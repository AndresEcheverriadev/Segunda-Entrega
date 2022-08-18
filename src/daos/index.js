import { config } from "../config/config.js";
import { ProductosDaoArchivo } from "./productos/productosDaoArchivo.js";
import { ProductosDaoMemoria } from "./productos/productosDaoMemoria.js";
import { ProductosDaoMongoDB } from "./productos/productosDaoMongoDB.js";
import { ProductosDaoFirebase } from "./productos/productosDaoFirebase.js";
import { CarritosDaoArchivo } from "./carritos/carritosDaoArchivo.js";
import { CarritosDaoMemoria } from "./carritos/carritosDaoMemoria.js";
import { CarritosDaoMongoDB } from "./carritos/carritosDaoMongoDB.js";
import { CarritosDaoFirebase } from "./carritos/carritosDaoFirebase.js";

const getDaosBySelectedDB = ({ selectedDB }) => {
  switch (selectedDB) {
    case config.persistences.mongo: {
      const ProductDao = new ProductosDaoMongoDB();
      const CartDao = new CarritosDaoMongoDB();
      return { ProductDao, CartDao };
    }
    case config.persistences.firebase: {
      const ProductDao = new ProductosDaoFirebase();
      const CartDao = new CarritosDaoFirebase();
      return { ProductDao, CartDao };
    }
    case config.persistences.filesystem: {
      const ProductDao = new ProductosDaoArchivo();
      const CartDao = new CarritosDaoArchivo();
      return { ProductDao, CartDao };
    }
    case config.persistences.memory: {
      const ProductDao = new ProductosDaoMemoria();
      const CartDao = new CarritosDaoMemoria();
      return { ProductDao, CartDao };
    }
    default: {
      const ProductDao = new ProductosDaoMongoDB();
      const CartDao = new CarritosDaoMongoDB();

      return { ProductDao, CartDao };
    }
  }
};

const { ProductDao, CartDao } = getDaosBySelectedDB({
  selectedDB: config.server.dbSelector,
});

export { ProductDao, CartDao };