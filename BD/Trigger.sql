USE database_vfs;

/* TRIGGER */
-- Tabla Bitacora
-- Select * from bitacora;
-- Drop table bitacora;
CREATE TABLE bitacora (
	id_bitacora INT NOT NULL AUTO_INCREMENT,
    transaccion VARCHAR (10) NOT NULL,
    usuario VARCHAR (40) NOT NULL,
    fecha DATETIME NOT NULL,
    tabla VARCHAR (20) NOT NULL,
    PRIMARY KEY (id_bitacora)
);

/* Disparadores */

-- Disparador Insertar Cliente
CREATE TRIGGER InsertarCliente_bitacora
AFTER INSERT ON Cliente
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(),NOW(), 'Cliente');

-- Actualizar
CREATE TRIGGER ActualizarCliente_bitacora
AFTER UPDATE ON Cliente
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(),NOW(), 'Cliente');

-- Eliminar
CREATE TRIGGER EliminarCliente_bitacora
AFTER DELETE ON Cliente
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(),NOW(), 'Cliente');

-- Disparador Insertar Empleado
CREATE TRIGGER InsertarEmpleado_bitacora
AFTER INSERT ON Empleado
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(),NOW(), 'Empleado');

-- Actualizar
CREATE TRIGGER ActualizarEmpleado_bitacora
AFTER UPDATE ON Empleado
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(),NOW(), 'Empleado');

-- Eliminar
CREATE TRIGGER EliminarEmpleado_bitacora
AFTER DELETE ON Empleado
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(),NOW(), 'Empleado');

-- Disparador Insertar Proveedor
CREATE TRIGGER InsertarProveedor_bitacora
AFTER INSERT ON Proveedor 
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(),NOW(), 'Proveedor');

-- Actualizar
CREATE TRIGGER ActualizarProveedor_bitacora
AFTER UPDATE ON Proveedor
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(),NOW(), 'Proveedor');

-- Eliminar
CREATE TRIGGER EliminarProveedor_bitacora
AFTER DELETE ON Proveedor
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(),NOW(), 'Proveedor');
 
-- Disparador Insertar Categoria
 CREATE TRIGGER InsertarCategoria_bitacora
AFTER INSERT ON Categoria
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(),NOW(), 'Categoria');

-- Actualizar
CREATE TRIGGER ActualizarCategoria_bitacora
AFTER UPDATE ON Categoria
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(),NOW(), 'Categoria');

-- Eliminar
CREATE TRIGGER EliminarCategoria_bitacora
AFTER DELETE ON Categoria
FOR EACH ROW
INSERT INTO bitacora(transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(),NOW(), 'Categoria');




