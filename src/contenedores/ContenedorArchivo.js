import fs from "fs";

class ContenedorArchivo {
  constructor(filename) {
    this.ruta = `../Database/${filename}.json`;
  };

  async listarTodo() {
    try {
      const file = await fs.promises.readFile(this.ruta);
      return JSON.parse(file);
    } catch (error) {
      await fs.promises.writeFile(this.ruta, JSON.stringify([]));
      return [];
    }
  };

  async listarPorId(id) {
    try {
      const elements = await this.listarTodo();
      const element = elements.find((e) => e.id == id);
      return element;
    } catch (error) {
      return error;
    }
  };

  async crearElemento(element) {
    try {
      const elements = await this.listarTodo();
      element.id = elements.length === 0 ? 1 : elements[elements.length - 1].id + 1;
      element.timestamp = new Date();
      elements.push(element);
      await fs.promises.writeFile(this.ruta, JSON.stringify(elements, null, 2));
      return elements;
    } catch (error) {
      return error;
    }
  };

  async actualizarElemento(id, newData) {
    try {
      const elements = await this.listarTodo();
      const elementIndex = elements.findIndex((e) => e.id == id);
      if (elementIndex === -1) return { error: "elemento no existe" };
      elements[elementIndex] = { ...elements[elementIndex], ...newData };
      await fs.promises.writeFile(this.ruta, JSON.stringify(elements, null, 3));
      return elements[elementIndex];
    } catch (error) {
      return error;
    }
  };

  async borrarPorId(id) {
    try {
      const elements = await this.listarTodo();
      const elementIndex = elements.findIndex((e) => e.id == id);
      if (elementIndex === -1) return { error: "Elemento no existe" };
      const newElements = elements.filter((e) => e.id != id);
      await fs.promises.writeFile(
        this.ruta,
        JSON.stringify(newElements, null, 3)
      );
      return elements;
    } catch (error) {
      return elements;
    }
  };

  async borrarTodo() {
    try {
      const voidData = [];
      await fs.promises.writeFile(
        this.ruta,
        JSON.stringify(voidData, null, 3)
      );
      return elements;
    } catch (error) {
      return elements;
    }
  };

}

export { ContenedorArchivo };