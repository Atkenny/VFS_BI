CREATE DATABASE database_vfs;
USE database_vfs;

-- Crear rol
-- CREATE ROLE 'desarrollador';
-- DROP ROLE 'desarrollador';

-- Asignar permisos
GRANT ALL ON database_vfs.* TO 'desarrollador';

-- Rol Gisela Paola 
-- CREATE USER 'GiselaPaola'@'localhost' IDENTIFIED BY 'correcto';
-- DROP USER 'GiselaPaola'@'localhost';

-- Rol de Kenny Tellez
-- CREATE USER 'KennyTellez'@'localhost' IDENTIFIED BY 'incorrecto';
-- DROP USER 'KennyTellez'@'localhost';

-- Privilegios
GRANT ALL PRIVILEGES ON database_vfs.* TO 'KennyTellez'@'localhost';
GRANT SUPER ON *.* TO 'KennyTellez'@'localhost';
FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON database_vfs.* TO 'GiselaPaola'@'localhost';
GRANT SUPER ON *.* TO 'GiselaPaola'@'localhost';
FLUSH PRIVILEGES;

-- Asignar rol a usuario
GRANT 'desarrollador' TO 'GiselaPaola'@'localhost';
GRANT 'desarrollador' TO 'KennyTellez'@'localhost';

SHOW GRANTS FOR 'GiselaPaola'@'localhost';
SHOW GRANTS FOR 'GiselaPaola'@'localhost' using 'desarrollador';

SHOW GRANTS FOR 'KennyTellez'@'localhost';
SHOW GRANTS FOR 'KennyTellez'@'localhost' using 'desarrollador';

SET DEFAULT ROLE  ALL TO
'GiselaPaola'@'localhost',
'KennyTellez'@'localhost';

SELECT CURRENT_ROLE();

CREATE TABLE Usuario (
  id_Usuario Int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre_Usuario Varchar(30) NOT NULL,
  contrasena Varchar(16) NOT NULL,
  rol Varchar(20) NOT NULL
);

INSERT INTO Usuario (nombre_Usuario, contrasena, rol)  VALUES ('KennyTellez','incorrecto', 'admin');
INSERT INTO Usuario (nombre_Usuario, contrasena, rol)  VALUES ('GiselaPaola','correcto', 'vendedor');
INSERT INTO Usuario (nombre_Usuario, contrasena, rol)  VALUES ('KennyPaolo','incorrecto1', 'cliente');
SELECT * FROM Usuario;

CREATE TABLE Cliente (
  id_cliente integer AUTO_INCREMENT PRIMARY KEY,
  nombre1_cliente varchar(15) NOT NULL,
  nombre2_cliente varchar(15) NULL,
  apellido1_cliente varchar(15) NOT NULL,
  apellido2_cliente varchar(15) NULL,
  genero varchar(10) NOT NULL,
  fechanac_cliente date NOT NULL,
  telefono_cliente varchar(9) NOT NULL,
  email_cliente varchar(255) NOT NULL,
  contrasena_cliente varchar(50) NOT NULL,
  rol Varchar(20) NULL
);

CREATE TABLE Empleado (
  id_empleado integer AUTO_INCREMENT PRIMARY KEY,
  nombre1_empleado varchar(15) NOT NULL,
  nombre2_empleado varchar(15) NULL,
  apellido1_empleado varchar(15) NOT NULL,
  apellido2_empleado varchar(15) NULL,
  genero varchar(10) NOT NULL,
  especialidad_empleado varchar(50) NULL,
  telefono_empleado varchar(9) NOT NULL,
  email_empleado varchar(50) NOT NULL,
  contrasena_empleado varchar(16) NULL,
  rol Varchar(20) NULL
);

CREATE TABLE Producto (
	id_producto integer AUTO_INCREMENT PRIMARY KEY,
	id_proveedor integer NOT NULL,
	id_categoria integer NOT NULL,
	nombre_producto varchar(30) NOT NULL,
	imagen LONGTEXT NULL,
	precio_venta decimal(12,2) NOT NULL,
	precio_compra decimal(12,2) NOT NULL,
	cantidad integer NOT NULL,
	talla varchar(20) NULL,
	genero_producto varchar(10) NOT NULL
);

	CREATE TABLE Categoria(
		id_categoria integer AUTO_INCREMENT PRIMARY KEY,
		nombre_categoria varchar(50) NOT NULL,
		descripcion_categoria varchar (255) NULL
	);

	CREATE TABLE Cita (
	  id_cita integer AUTO_INCREMENT PRIMARY KEY,
	  id_cliente integer NOT NULL,
	  id_empleado integer NOT NULL,
	  tipo_servicio varchar(100) NOT NULL,
	  fecha_cita date NOT NULL,
	  hora_cita time NOT NULL,
	  estado_cita boolean NULL,
	  comentario varchar(255) NULL
	);

CREATE TABLE Venta (
  id_venta integer AUTO_INCREMENT PRIMARY KEY,
  id_cliente integer NULL,
  id_tipo_pago integer NULL,
  id_entrega integer NULL,
  fecha_compra date NULL,
  hora_compra time NULL
);

CREATE TABLE Tipo_pago (
  id_tipo_pago integer AUTO_INCREMENT PRIMARY KEY,
  tipo_pago varchar(65) NULL
);

CREATE TABLE Tipo_entrega (
  id_entrega integer AUTO_INCREMENT PRIMARY KEY,
  id_empleado integer NULL,
  tipo_entrega varchar(50) NULL,
  estado_entrega varchar(20) NULL,
  direccion_entrega varchar(255) NULL
);

CREATE TABLE Detalle_venta(
  id_detalle_venta integer AUTO_INCREMENT PRIMARY KEY,
  id_venta integer NULL,
  id_producto integer NULL,
  precio_unitario decimal(12,2) NULL, 
  cantidad_compra integer NULL
);

CREATE TABLE Resena(
  id_resena integer AUTO_INCREMENT PRIMARY KEY,
  id_cliente integer NOT NULL,
  id_producto integer NOT NULL,
  calificacion integer NULL,
  comentario varchar(255) NULL,
  fecha_publicacion Datetime NOT NULL,
  aprovacion boolean NOT NULL
);

CREATE TABLE ListaDeseos (
  id_deseo integer AUTO_INCREMENT PRIMARY KEY,
  id_cliente integer NOT NULL,
  fecha_creacion Datetime NOT NULL
);

CREATE TABLE ListaDetalle (
  id_listadetalle integer AUTO_INCREMENT PRIMARY KEY,
  id_producto integer NOT NULL,
  id_deseo integer NOT NULL
);

CREATE TABLE Proveedor (
  id_proveedor integer AUTO_INCREMENT PRIMARY KEY,
  empresa_proveedor varchar(60) NOT NULL,
  direccion_proveedor varchar(255) NULL,
  ciudad_proveedor varchar(50) NULL
);

-- Restricciones y relaciones
-- Relación entre Cita y Cliente
ALTER TABLE Cita ADD CONSTRAINT FK_Cita_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente);

-- Relación entre Cita y Empleado
ALTER TABLE Cita ADD CONSTRAINT FK_Cita_Empleado FOREIGN KEY (id_empleado) REFERENCES Empleado (id_empleado);

-- Relación entre Tipo_entrega y Empleado
ALTER TABLE Tipo_entrega ADD CONSTRAINT FK_Tipo_entrega_Empleado FOREIGN KEY (id_empleado) REFERENCES Empleado (id_empleado);

-- Relación entre Producto y Proveedor
ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (id_proveedor) REFERENCES Proveedor (id_proveedor);

-- Relación entre Compra y Cliente
ALTER TABLE Venta ADD CONSTRAINT FK_Compra_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente);

-- Relación entre Detalle_compra y Compra
ALTER TABLE Detalle_venta ADD CONSTRAINT FK_Detalle_venta FOREIGN KEY (id_venta) REFERENCES Venta (id_venta);

-- Relación entre Compra y Tipo_pago
ALTER TABLE Venta ADD CONSTRAINT FK_Venta_Tipo_pago FOREIGN KEY (id_tipo_pago) REFERENCES Tipo_pago (id_tipo_pago);

-- Relación entre Compra y Tipo_entrega
ALTER TABLE Venta ADD CONSTRAINT FK_Compra_Tipo_entrega FOREIGN KEY (id_entrega) REFERENCES Tipo_entrega (id_entrega);

-- Relación entre Detalle_compra y Producto
ALTER TABLE Detalle_venta ADD CONSTRAINT FK_Detalle_venta_Producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto);

-- Relación entre Producto y Categoria
ALTER TABLE Producto ADD CONSTRAINT FK_producto_categoria FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria);

-- Relación entre Resena y Producto
ALTER TABLE Resena ADD CONSTRAINT FK_Resena_Producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto);

-- Relación entre Resena y Cliente
ALTER TABLE Resena ADD CONSTRAINT FK_Resena_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente);

-- Relación entre ListaDetalle y ListaDeseos
ALTER TABLE ListaDetalle ADD CONSTRAINT FK_ListaDetalle_ListaDeseos FOREIGN KEY (id_deseo) REFERENCES ListaDeseos (id_deseo);

-- Relación entre ListaDetalle y Producto
ALTER TABLE ListaDetalle ADD CONSTRAINT FK_ListaDetalle_Producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto);

-- Relación entre ListaDeseos y Cliente
ALTER TABLE ListaDeseos ADD CONSTRAINT FK_ListaDeseos_Cliente FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente);
 
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '@kekodroid';
ALTER USER 'KennyTellez'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'incorrecto';
ALTER USER 'GiselaPaola'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'correcto';

GRANT PROCESS ON *.* TO 'KennyTellez';
SHOW GRANTS FOR 'KennyTellez'@'localhost';