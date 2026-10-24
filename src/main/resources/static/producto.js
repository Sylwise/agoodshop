class ProductoEnCarrito {
  constructor(sku, titulo, precio) {
    this.sku = sku;
    this.titulo = titulo;
    this.precio = precio;
    this.unidades = 0;
  }

  subTotal() {
    return this.precio * this.unidades;
  }
}
