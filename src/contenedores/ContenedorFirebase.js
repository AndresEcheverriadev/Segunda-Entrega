import pkg from 'firebase-admin';
const admin = pkg;
const db = admin.firestore();

class ContenedorFirebase {
    constructor({collection}) {
        this.query = db.collection(collection)
    };

    async listarTodo() {
        try {
          const all = await this.query.get();
          let docs = all.docs;
          const response = docs.map((doc) => ({
            id:doc.id,
            title: doc.data().title,
            price: doc.data().price,
            thumbnail: doc.data().thumbnail,
            stock: doc.data().stock,
            timestamp: doc.data().timestamp,
          })
          );
          return response;
        } catch (error) {
          return error;
        }
    };

    async listarPorId(id) {
        try {
          const doc = this.DAO.doc(`${id}`);
          const item = await doc.get();
          const response = item.data();
          return response;
        } catch (error) {
          return error;
        }
    };

    async crearElemento(title,price,thumbnail,stock) {
        try {
          const doc = this.DAO.doc();
          await doc.create({title: title,price: price,thumbnail: thumbnail,stock: stock})
          return element;
        } catch (error) {
          return error;
        }
    };

    async actualizarElemento(id, title,price,thumbnail,stock) {
        try {
          const doc = this.DAO.doc(`${id}`);
          const item =  await doc.update({title: title,price: price,thumbnail: thumbnail,stock: stock});
          return item;
        } catch (error) {
          return error;
        }
    };

    async borrarPorId(id) {
        try {
          const doc = this.DAO.doc(`${id}`)
          const item = await doc.delete();
          return item;
        } catch (error) {
          return error;
        }
    };
}; 

export { ContenedorFirebase  };