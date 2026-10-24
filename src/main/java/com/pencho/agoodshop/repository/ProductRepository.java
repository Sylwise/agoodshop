package com.pencho.agoodshop.repository;

import com.pencho.agoodshop.dto.Producto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository {

    private final List<Producto> productos = List.of(
            new Producto("0K3QOSOV4V", "iPhone 13 Pro", "938.99"),
            new Producto("TGD5XORY1L", "Cargador", "49.99"),
            new Producto("IOKW9BQ9F3", "Funda de piel", "79.99"));

    public List<Producto> getProductos() {
        return productos;
    }

}
