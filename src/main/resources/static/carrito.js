class Carrito {
  constructor(productos) {
    this.productos = productos.map(
      (producto) =>
        new ProductoEnCarrito(
          producto.sku,
          producto.titulo,
          Number(producto.precio),
        ),
    );
  }

  encontrarProducto(sku) {
    const producto = this.productos.find((p) => p.sku == sku);
    if (producto) {
      return producto;
    } else {
      throw new Error("El producto no existe");
    }
  }

  actualizarUnidades(sku, unidades) {
    let productoEncontrado = this.encontrarProducto(sku);
    productoEncontrado.unidades = unidades;
  }

  obtenerInformacionProducto(sku) {
    let productoEncontrado = this.encontrarProducto(sku);
    return {
      titulo: productoEncontrado.titulo,
      sku: productoEncontrado.sku,
      cantidad: productoEncontrado.unidades,
      precio: productoEncontrado.precio,
    };
  }

  obtenerCarrito() {
    let cesta = [];
    this.productos.forEach((producto) => {
      if (producto.unidades > 0) {
        cesta.push(producto);
      }
    });
    let costeTotal = 0;
    cesta.forEach((productoEnCesta) => {
      costeTotal += productoEnCesta.subTotal();
    });

    return {
      total: costeTotal.toFixed(2),
      moneda: "€",
      productos: cesta,
    };
  }
}
