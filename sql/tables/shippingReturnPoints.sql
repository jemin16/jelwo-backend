CREATE TABLE shipping_return_points (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shipping_return_id INT NOT NULL,
    left_points VARCHAR(255) DEFAULT NULL,
    left_description Text DEFAULT NULL,
    right_points VARCHAR(255) DEFAULT NULL,
    right_description Text DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (shipping_return_id) REFERENCES shipping_return(id)
);