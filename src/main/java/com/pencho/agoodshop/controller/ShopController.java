package com.pencho.agoodshop.controller;

import com.pencho.agoodshop.dto.Producto;
import com.pencho.agoodshop.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ShopController {

    private final ProductRepository productRepository;

    public ShopController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping()
    public ResponseEntity<List<Producto>> getProductos () {
        return ResponseEntity.ok(productRepository.getProductos());
    }

}
