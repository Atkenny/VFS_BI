Create database DataMart;
Use DataMart;

-- Tabla Cliente
CREATE TABLE dim_cliente (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre1_cliente VARCHAR(15) NOT NULL,
  nombre2_cliente VARCHAR(15),
  apellido1_cliente VARCHAR(15) NOT NULL,
  apellido2_cliente VARCHAR(15),
  genero VARCHAR(10)
);

-- Tabla Producto
CREATE TABLE dim_producto (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre_categoria VARCHAR(50) NOT NULL,
  nombre_producto VARCHAR(30) NOT NULL,
  precio_venta DECIMAL(12,2) NOT NULL,
  precio_compra DECIMAL(12,2) NOT NULL,
  cantidad INT NOT NULL,
  empresa_proveedor VARCHAR(60) NOT NULL,
  direccion_proveedor VARCHAR(255),
  ciudad_proveedor VARCHAR(50),
  genero_producto VARCHAR(10)
);

-- Tabla de fecha
CREATE TABLE dim_tiempo (
    id_tiempo INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    mes INT NOT NULL,
    dia INT NOT NULL,
    anio INT
);

-- Tabla de Hechos Venta
CREATE TABLE hechos_ventas (
  id_hventa INT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_producto INT NOT NULL,
  id_tiempo INT NOT NULL,
  cantidad_compra INT NOT NULL,
  tipo_pago VARCHAR(65) NOT NULL,
  tipo_entrega VARCHAR(50) NOT NULL,
  estado_entrega VARCHAR(20) NOT NULL,
  precio_unitario DECIMAL(10, 2),
  total_venta DECIMAL(10, 2),
  FOREIGN KEY (id_cliente) REFERENCES dim_cliente(id_cliente),
  FOREIGN KEY (id_producto) REFERENCES dim_producto(id_producto),
  FOREIGN KEY (id_tiempo) REFERENCES dim_tiempo(id_tiempo)
);