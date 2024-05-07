USE database_vfs;

INSERT INTO Cliente (nombre1_cliente, nombre2_cliente, apellido1_cliente, apellido2_cliente, genero, fechanac_cliente, telefono_cliente, email_cliente, contrasena_cliente, rol) 
VALUES 
('Juan', 'Carlos', 'Pérez', 'González', 'Masculino', '1990-05-15', '123456789', 'juan@example.com', 'contraseña123', 'Cliente'),
('María', NULL, 'Gómez', 'López', 'Femenino', '1988-10-20', '987654321', 'maria@example.com', 'maria123', 'Cliente'),
('Pedro', 'José', 'Martínez', 'Sánchez', 'Masculino', '1995-02-28', '789456123', 'pedro@example.com', 'pedro456', 'Cliente'),
('Ana', 'María', 'Rodríguez', 'Díaz', 'Femenino', '1993-07-10', '654987321', 'ana@example.com', 'ana789', 'Cliente'),
('Luis', NULL, 'Fernández', 'Pérez', 'Masculino', '1985-12-03', '147258369', 'luis@example.com', 'luis123', 'Cliente');

INSERT INTO Empleado (nombre1_empleado, nombre2_empleado, apellido1_empleado, apellido2_empleado, genero, especialidad_empleado, telefono_empleado, email_empleado, contrasena_empleado, rol) 
VALUES 
('Carlos', 'Manuel', 'López', 'García', 'Masculino', 'Desarrollador', '123456789', 'carlos@example.com', 'contraseña123', 'Empleado'),
('María', 'Isabel', 'Gómez', 'López', 'Femenino', 'Diseñador', '987654321', 'maria@example.com', 'maria123', 'Empleado'),
('Pedro', NULL, 'Martínez', 'Sánchez', 'Masculino', 'Analista de Datos', '789456123', 'pedro@example.com', 'pedro456', 'Empleado'),
('Ana', 'Cristina', 'Rodríguez', 'Díaz', 'Femenino', 'Gerente de Proyecto', '654987321', 'ana@example.com', 'ana789', 'Empleado'),
('Luis', NULL, 'Fernández', 'Pérez', 'Masculino', 'Consultor', '147258369', 'luis@example.com', 'luis123', 'Empleado');

INSERT INTO Categoria (nombre_categoria, descripcion_categoria) 
VALUES 
('Electrónica', 'Productos relacionados con la electrónica de consumo.'),
('Ropa', 'Prendas de vestir para hombres, mujeres y niños.'),
('Hogar', 'Productos para el hogar, como muebles y electrodomésticos.'),
('Alimentación', 'Productos alimenticios y bebidas.'),
('Salud y Belleza', 'Productos relacionados con el cuidado personal y la salud.');

INSERT INTO Proveedor (empresa_proveedor, direccion_proveedor, ciudad_proveedor) 
VALUES 
('ElectroTech', 'Calle Principal 123', 'Ciudad de Ejemplo'),
('FashionWorld', 'Avenida Central 456', 'Otra Ciudad'),
('HomeSupplies', 'Calle Secundaria 789', 'Ciudad Principal'),
('FoodStuff', 'Plaza Mayor 101', 'Ciudad Secundaria');

INSERT INTO Producto (id_proveedor, id_categoria, nombre_producto, imagen, precio_venta, precio_compra, cantidad, talla, genero_producto) 
VALUES 
(1, 1, 'Smartphone X', 'imagen_smartphone_x.jpg', 599.99, 450.00, 100, NULL, 'Unisex'),
(2, 2, 'Camiseta básica', 'imagen_camiseta_basica.jpg', 19.99, 10.00, 500, 'M', 'Hombre'),
(3, 2, 'Vestido veraniego', 'imagen_vestido_veraniego.jpg', 39.99, 25.00, 200, 'S', 'Mujer'),
(1, 3, 'Mesa de centro', 'imagen_mesa_centro.jpg', 149.99, 100.00, 50, NULL, 'Unisex'),
(4, 4, 'Arroz integral', 'imagen_arroz_integral.jpg', 2.99, 1.50, 1000, NULL, 'Unisex');

INSERT INTO Tipo_pago (tipo_pago) 
VALUES 
('Tarjeta de crédito'),
('Transferencia bancaria'),
('Efectivo'),
('Pago móvil'),
('Cheque');

INSERT INTO Tipo_entrega (id_empleado, tipo_entrega, estado_entrega, direccion_entrega) 
VALUES 
(1, 'Envío a domicilio', 'En camino', 'Calle Principal 123, Ciudad'),
(2, 'Recogida en tienda', 'Pendiente', 'Avenida Central 456, Otra Ciudad'),
(3, 'Envío express', 'Entregado', 'Calle Secundaria 789, Ciudad Principal'),
(4, 'Recogida programada', 'Entregado', 'Plaza Mayor 101, Ciudad Secundaria');

INSERT INTO Compra (id_cliente, id_tipo_pago, id_entrega, fecha_compra, hora_compra) 
VALUES 
(1, 1, 1, '2024-05-10', '10:00:00'),
(2, 2, 2, '2024-05-12', '15:30:00'),
(3, 1, 1, '2024-05-14', '16:00:00'),
(4, 3, 2, '2024-05-16', '11:00:00'),
(5, 1, 3, '2024-05-18', '14:00:00'),
(5, 1, 3, '2024-05-18', '14:00:00');


INSERT INTO Detalle_compra (id_compra, id_producto, precio_unitario, cantidad_compra) 
VALUES 
(1, 1, 599.99, 1),
(1, 2, 19.99, 3),
(2, 3, 39.99, 2),
(3, 4, 149.99, 1),
(4, 5, 2.99, 10),
(4, 5, 2.99, 10);

INSERT INTO Resena (id_cliente, id_producto, calificacion, comentario, fecha_publicacion, aprovacion) 
VALUES 
(1, 1, 4, 'Buen producto, funciona bien.', '2024-05-10 08:30:00', true),
(2, 2, 5, 'Me encanta esta camiseta, es muy cómoda.', '2024-05-12 14:45:00', true),
(3, 3, 3, 'El vestido es bonito pero la tela es un poco áspera.', '2024-05-14 16:20:00', true),
(4, 4, 5, 'Excelente calidad, muy resistente.', '2024-05-16 10:00:00', true),
(5, 5, 2, 'El arroz llegó un poco tarde y algunos paquetes estaban dañados.', '2024-05-18 15:00:00', false);

INSERT INTO ListaDeseos (id_cliente, fecha_creacion) 
VALUES 
(1, '2024-05-10 08:30:00'),
(2, '2024-05-12 14:45:00'),
(3, '2024-05-14 16:20:00'),
(4, '2024-05-16 10:00:00'),
(5, '2024-05-18 15:00:00');

INSERT INTO ListaDetalle (id_producto, id_deseo) 
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO Cita (id_cliente, id_empleado, tipo_servicio, fecha_cita, hora_cita, estado_cita, comentario) 
VALUES 
(1, 1, 'Corte de cabello', '2024-05-10', '10:00:00', true, 'Cliente puntual'),
(2, 3, 'Limpieza facial', '2024-05-12', '15:30:00', false, 'Cliente canceló'),
(3, 2, 'Masaje relajante', '2024-05-14', '16:00:00', true, 'Cliente satisfecho'),
(4, 4, 'Tratamiento capilar', '2024-05-16', '11:00:00', true, NULL),
(5, 5, 'Manicura y pedicura', '2024-05-18', '14:00:00', false, 'Cliente reprogramará');

SELECT
    Compra.id_compra,
    Compra.id_cliente,
    Compra.id_producto,
    Compra.id_tiempo,
    Compra.cantidad_compra,
    Compra.precio_unitario,
    Tipo_pago.tipo_pago,
    Tipo_entrega.tipo_entrega,
    Tipo_entrega.estado_entrega
FROM 
    Compra
INNER JOIN Tipo_pago ON Compra.id_tipo_pago = Tipo_pago.id_tipo_pago
INNER JOIN Tipo_entrega ON Compra.id_entrega = Tipo_entrega.id_entrega;
