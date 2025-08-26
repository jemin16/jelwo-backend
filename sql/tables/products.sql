CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  category_id int NOT NULL,
  price decimal(10,2) NOT NULL,
  old_price decimal(10,2) NOT NULL,
  stock int NOT NULL,
  rating int NOT NULL,
  description text NOT NULL,
  image varchar(255) NOT NULL,
  vendor varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  sku varchar(255) NOT NULL,
  barcode varchar(255) NOT NULL,
  weight int NOT NULL,
  created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);