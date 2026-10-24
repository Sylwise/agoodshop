class Carrito {
  constructor(productos) {
    this.productos = productos.map(
      (producto) =>
        new ProductoEnCarrito(
          producto.SKU,
          producto.title,
          Number(producto.price),
        ),
    );
  }

  actualizarUnidades(sku, unidades) {
    const producto = this.productos.find((p) => p.SKU == sku);
    if (producto) {
      producto.unidades = unidades;
    }
  }
}
