const listaProductos = document.getElementById("lista-productos");
const resumenLista = document.getElementById("resumen-lista");
const total = document.getElementById("total");
const estado = document.getElementById("estado");

async function pedirDatos() {
  const respuesta = await fetch("/api/products");

  const arrayDeProductos = await respuesta.json();

  return arrayDeProductos;
}

function crearElemento(etiqueta, clase, texto = "") {
  const elemento = document.createElement(etiqueta);
  elemento.className = clase;
  elemento.textContent = texto;
  return elemento;
}

function crearMolde(producto, carrito) {
  const listItem = crearElemento("li", "producto");
  const infoContenedor = crearElemento("div", "producto__info");
  const titulo = crearElemento("span", "producto__titulo", producto.titulo);
  const sku = crearElemento("span", "producto__sku", producto.sku);
  const cantidadContenedor = crearElemento("div", "cantidad");
  const botonMenos = crearElemento("button", "cantidad__boton", "-");

  const inputCantidad = crearElemento("input", "cantidad__input");
  inputCantidad.type = "number";
  inputCantidad.min = 0;
  inputCantidad.value = producto.unidades;
  const botonMas = crearElemento("button", "cantidad__boton", "+");

  const precio = crearElemento(
    "span",
    "producto__precio",
    producto.precio.toFixed(2) + " €",
  );
  const subtotal = crearElemento(
    "span",
    "producto__subtotal",
    producto.subTotal().toFixed(2) + " €",
  );

  infoContenedor.appendChild(titulo);
  infoContenedor.appendChild(sku);

  cantidadContenedor.appendChild(botonMenos);
  cantidadContenedor.appendChild(inputCantidad);
  cantidadContenedor.appendChild(botonMas);

  listItem.appendChild(infoContenedor);
  listItem.appendChild(cantidadContenedor);
  listItem.appendChild(precio);
  listItem.appendChild(subtotal);
  botonMas.addEventListener("click", () => {
    carrito.actualizarUnidades(producto.sku, producto.unidades + 1);
    actualizarDatos();
    pintarResumen(carrito);
  });
  botonMenos.addEventListener("click", () => {
    try {
      carrito.actualizarUnidades(producto.sku, producto.unidades - 1);
    } catch (error) {
      console.log(error.message);
    }

    actualizarDatos();
    pintarResumen(carrito);
  });
  inputCantidad.addEventListener("change", () => {
    try {
      carrito.actualizarUnidades(producto.sku, Number(inputCantidad.value));
    } catch (error) {
      console.log(error.message);
    }

    actualizarDatos();
    pintarResumen(carrito);
  });

  function actualizarDatos() {
    inputCantidad.value = producto.unidades;
    subtotal.textContent = producto.subTotal().toFixed(2) + " €";
    total.textContent = carrito.obtenerCarrito().total + " €";
  }

  return listItem;
}

function pintarProductos(arrayProductos, carrito) {
  arrayProductos.forEach((producto) => {
    listaProductos.appendChild(crearMolde(producto, carrito));
  });
}

function pintarResumen(carrito) {
  while (resumenLista.firstChild) {
    resumenLista.removeChild(resumenLista.firstChild);
  }

  carrito.obtenerCarrito().productos.forEach((producto) => {
    const li = document.createElement("li");
    resumenLista.appendChild(li);
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    span.textContent = `${producto.unidades} x ${producto.titulo}`;
    span2.textContent = producto.subTotal().toFixed(2) + " €";
    li.appendChild(span);
    li.appendChild(span2);
  });
}

async function iniciar() {
  estado.textContent = "Cargando...";
  try {
    const carrito = new Carrito(await pedirDatos());
    pintarProductos(carrito.productos, carrito);
    estado.textContent = "";
  } catch (error) {
    estado.textContent = "Error al cargar los productos";
  }
}

iniciar();
