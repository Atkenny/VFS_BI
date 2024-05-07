Create database DataMart;
Use DataMart;

-- Tabla Cliente
CREATE TABLE dim_cliente (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre1_cliente VARCHAR(15) NOT NULL,
  nombre2_cliente VARCHAR(15),
  apellido1_cliente VARCHAR(15) NOT NULL,
  apellido2_cliente VARCHAR(15)
);

-- Tabla Producto
CREATE TABLE dim_producto (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre_categoria VARCHAR(50) NOT NULL,
  descripcion_categoria VARCHAR(255),
  nombre_producto VARCHAR(30) NOT NULL,
  imagen LONGTEXT,
  precio_venta DECIMAL(12,2) NOT NULL,
  precio_compra DECIMAL(12,2) NOT NULL,
  cantidad INT NOT NULL,
  empresa_proveedor VARCHAR(60) NOT NULL,
  direccion_proveedor VARCHAR(255),
  ciudad_proveedor VARCHAR(50)
);

-- Tabla de fecha
CREATE TABLE dim_fecha (
    id_fecha INT AUTO_INCREMENT PRIMARY KEY,
    mes INT NOT NULL,
    dia INT NOT NULL,
    hora DATETIME NOT NULL
);

-- Tabla de Hechos Venta
CREATE TABLE hechos_ventas (
  id_venta INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  id_producto INT NOT NULL,
  id_fecha INT NOT NULL,
  cantidad_compra INT NOT NULL,
  tipo VARCHAR(65) NOT NULL,
  tipo_entrega VARCHAR(50) NOT NULL,
  estado_entrega VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES dim_cliente(id_cliente),
  FOREIGN KEY (id_producto) REFERENCES dim_producto(id_producto),
  FOREIGN KEY (id_fecha) REFERENCES dim_fecha(id_fecha)
);
