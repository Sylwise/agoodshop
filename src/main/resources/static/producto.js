class ProductoEnCarrito {
  constructor(SKU, title, price) {
    this.SKU = SKU;
    this.title = title;
    this.price = price;
    this.unidades = 0;
  }

  subTotal() {
    return this.price * this.unidades;
  }
}
