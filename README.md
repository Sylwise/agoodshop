# agoodshop

Carrito de la compra de una tienda online ficticia (Actividad 1 de Desarrollo Web en Entorno Cliente).

- **Frontend:** HTML, CSS y JavaScript en `src/main/resources/static/` (`carrito.js`, `producto.js`, `app.js`).
- **Backend:** Spring Boot, que sirve la página y la API de productos en `/api/products`.

No abras `index.html` con doble clic: los productos se piden al servidor, así que hay que arrancarlo primero.

## Cómo arrancarlo

### Opción 1: con Java 21

```bash
./mvnw spring-boot:run        # Linux / macOS
mvnw.cmd spring-boot:run      # Windows
```

### Opción 2: con Docker

```bash
docker compose up --build
```

En los dos casos, abre **http://localhost:8080** en el navegador.
