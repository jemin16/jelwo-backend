CREATE TABLE variant_images (
  id int NOT NULL AUTO_INCREMENT,
  images json NOT NULL,
  product_id int NOT NULL,
  variant_id int DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY `fk_variant_images_product_id` (`product_id`),
  KEY `fk_variant_images_variant_id` (`variant_id`),
  CONSTRAINT `fk_variant_images_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_variant_images_variant_id` FOREIGN KEY (`variant_id`) REFERENCES `product_variants` (`id`) ON DELETE CASCADE
);