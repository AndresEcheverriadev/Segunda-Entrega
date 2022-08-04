class ContenedorMemoria {
    constructor() {
      this.elements = [];
    }
  
    listarTodo() {
      return this.elements;
    }
  
    listarPorId(id) {
      const element = this.elements.find((e) => e.id == id);
      return element;
    }
  
    crearElemento(element) {
      element.id =
        this.elements.length === 0
          ? 1
          : this.elements[this.elements.length - 1].id + 1;
      this.elements.push(element);
      return element;
    }
  
    actualizarElemento(id, newData) {
      const elementIndex = this.elements.findIndex((e) => e.id == id);
      if (elementIndex === -1) return { error: true };
      this.elements[elementIndex] = {
        ...this.elements[elementIndex],
        ...newData,
      };
      return this.elements[elementIndex];
    }
  
    borrarPorId(id) {
      const elementIndex = this.elements.findIndex((e) => e.id == id);
      if (elementIndex === -1) return { error: true };
      this.elements = this.elements.filter((e) => e.id != id);
      return { error: false };
    };

    borrarTodo() {
        return elements = [];
    };
  }
  
  export { ContenedorMemoria };