USE database_vfs;

INSERT INTO Cliente (nombre1_cliente, nombre2_cliente, apellido1_cliente, apellido2_cliente, genero, fechanac_cliente, telefono_cliente, email_cliente, contrasena_cliente, rol) 
VALUES 
('Juan', 'Carlos', 'Pérez', 'González', 'Masculino', '1990-05-15', '123456789', 'juan@example.com', 'contraseña123', 'Cliente'),
('María', NULL, 'Gómez', 'López', 'Femenino', '1988-10-20', '987654321', 'maria@example.com', 'maria123', 'Cliente'),
('Pedro', 'José', 'Martínez', 'Sánchez', 'Masculino', '1995-02-28', '789456123', 'pedro@example.com', 'pedro456', 'Cliente'),
('Ana', 'María', 'Rodríguez', 'Díaz', 'Femenino', '1993-07-10', '654987321', 'ana@example.com', 'ana789', 'Cliente'),
('Luis', NULL, 'Fernández', 'Pérez', 'Masculino', '1985-12-03', '147258369', 'luis@example.com', 'luis123', 'Cliente'),
('Carmen', NULL, 'López', 'García', 'Femenino', '1992-03-18', '369258147', 'carmen@example.com', 'carmen456', 'Cliente'),
('Javier', 'Alejandro', 'Gutiérrez', 'Martín', 'Masculino', '1991-08-25', '654123789', 'javier@example.com', 'javier789', 'Cliente'),
('Sofía', NULL, 'Dominguez', 'Hernández', 'Femenino', '1997-11-30', '321654987', 'sofia@example.com', 'sofia123', 'Cliente'),
('Pablo', 'Andrés', 'Suárez', 'Jiménez', 'Masculino', '1987-04-12', '987321654', 'pablo@example.com', 'pablo456', 'Cliente'),
('Elena', NULL, 'Torres', 'Ruiz', 'Femenino', '1994-09-05', '159357852', 'elena@example.com', 'elena789', 'Cliente'),
('Diego', NULL, 'Gómez', 'Gutiérrez', 'Masculino', '1989-06-22', '456789123', 'diego@example.com', 'diego123', 'Cliente'),
('Laura', 'Isabel', 'Vázquez', 'Sánchez', 'Femenino', '1996-01-17', '852369741', 'laura@example.com', 'laura456', 'Cliente'),
('Alejandro', 'David', 'Muñoz', 'Martínez', 'Masculino', '1990-07-08', '654123789', 'alejandro@example.com', 'alejandro789', 'Cliente'),
('Lucía', NULL, 'Ortega', 'Fernández', 'Femenino', '1986-02-28', '987654321', 'lucia@example.com', 'lucia123', 'Cliente'),
('Carlos', NULL, 'Hernández', 'Gómez', 'Masculino', '1984-11-11', '369852147', 'carlos@example.com', 'carlos456', 'Cliente'),
('Paula', NULL, 'Jiménez', 'Díaz', 'Femenino', '1993-08-09', '654789321', 'paula@example.com', 'paula123', 'Cliente'),
('Jorge', NULL, 'Moreno', 'Martínez', 'Masculino', '1988-05-04', '789654321', 'jorge@example.com', 'jorge456', 'Cliente'),
('Marta', 'Victoria', 'García', 'Sánchez', 'Femenino', '1991-12-27', '123987654', 'marta@example.com', 'marta789', 'Cliente'),
('Adrián', NULL, 'Romero', 'González', 'Masculino', '1997-09-14', '321987654', 'adrian@example.com', 'adrian123', 'Cliente'),
('Silvia', NULL, 'Alvarez', 'López', 'Femenino', '1987-06-30', '789654123', 'silvia@example.com', 'silvia456', 'Cliente'),
('Raul', NULL, 'Serrano', 'Martínez', 'Masculino', '1994-03-25', '987123456', 'raul@example.com', 'raul789', 'Cliente'),
('Cristina', NULL, 'Ferrer', 'Ruiz', 'Femenino', '1989-10-16', '321456987', 'cristina@example.com', 'cristina123', 'Cliente'),
('Rubén', NULL, 'Reyes', 'Hernández', 'Masculino', '1992-07-07', '789123654', 'ruben@example.com', 'ruben456', 'Cliente'),
('Natalia', NULL, 'Cortés', 'Gómez', 'Femenino', '1990-04-02', '456987123', 'natalia@example.com', 'natalia789', 'Cliente'),
('David', 'Javier', 'Vidal', 'Alonso', 'Masculino', '1986-01-09', '654321987', 'david@example.com', 'david123', 'Cliente'),
('Patricia', NULL, 'Iglesias', 'Fernández', 'Femenino', '1995-11-12', '987456321', 'patricia@example.com', 'patricia456', 'Cliente'),
('Sergio', NULL, 'Molina', 'Torres', 'Masculino', '1988-08-03', '321789654', 'sergio@example.com', 'sergio789', 'Cliente'),
('Eva', NULL, 'Ramos', 'Morales', 'Femenino', '1993-05-22', '456123789', 'eva@example.com', 'eva123', 'Cliente'),
('Fernando', NULL, 'Garrido', 'Sanz', 'Masculino', '1990-02-14', '987321456', 'fernando@example.com', 'fernando456', 'Cliente'),
('Beatriz', NULL, 'Carmona', 'García', 'Femenino', '1987-09-08', '159753486', 'beatriz@example.com', 'beatriz123', 'Cliente');

INSERT INTO Empleado (nombre1_empleado, nombre2_empleado, apellido1_empleado, apellido2_empleado, genero, especialidad_empleado, telefono_empleado, email_empleado, contrasena_empleado, rol) 
VALUES 
('Carlos', 'Manuel', 'López', 'García', 'Masculino', 'Desarrollador', '123456789', 'carlos@example.com', 'contraseña123', 'Empleado'),
('María', 'Isabel', 'Gómez', 'López', 'Femenino', 'Diseñador', '987654321', 'maria@example.com', 'maria123', 'Empleado'),
('Pedro', NULL, 'Martínez', 'Sánchez', 'Masculino', 'Analista de Datos', '789456123', 'pedro@example.com', 'pedro456', 'Empleado'),
('Ana', 'Cristina', 'Rodríguez', 'Díaz', 'Femenino', 'Gerente de Proyecto', '654987321', 'ana@example.com', 'ana789', 'Empleado'),
('Luis', NULL, 'Fernández', 'Pérez', 'Masculino', 'Consultor', '147258369', 'luis@example.com', 'luis123', 'Empleado'),
('Carmen', 'Alejandra', 'López', 'García', 'Femenino', 'Desarrollador', '369258147', 'carmen@example.com', 'carmen456', 'Empleado'),
('Javier', NULL, 'Gutiérrez', 'Martín', 'Masculino', 'Diseñador', '654123789', 'javier@example.com', 'javier789', 'Empleado'),
('Sofía', NULL, 'Dominguez', 'Hernández', 'Femenino', 'Analista de Datos', '321654987', 'sofia@example.com', 'sofia123', 'Empleado'),
('Pablo', 'Andrés', 'Suárez', 'Jiménez', 'Masculino', 'Gerente de Proyecto', '987321654', 'pablo@example.com', 'pablo456', 'Empleado'),
('Elena', NULL, 'Torres', 'Ruiz', 'Femenino', 'Consultor', '159357852', 'elena@example.com', 'elena789', 'Empleado');

INSERT INTO Categoria (nombre_categoria, descripcion_categoria) 
VALUES 
('Electrónica', 'Productos relacionados con la electrónica de consumo.'),
('Ropa', 'Prendas de vestir para hombres, mujeres y niños.'),
('Hogar', 'Productos para el hogar, como muebles y electrodomésticos.'),
('Alimentación', 'Productos alimenticios y bebidas.'),
('Salud y Belleza', 'Productos relacionados con el cuidado personal y la salud.'),
('Deportes', 'Artículos y equipamiento deportivo.'),
('Libros', 'Libros de distintos géneros y temas.'),
('Juguetes', 'Juguetes para niños de todas las edades.');

INSERT INTO Proveedor (empresa_proveedor, direccion_proveedor, ciudad_proveedor) 
VALUES 
('ElectroTech', 'Calle Principal 123', 'Ciudad de Ejemplo'),
('FashionWorld', 'Avenida Central 456', 'Otra Ciudad'),
('HomeSupplies', 'Calle Secundaria 789', 'Ciudad Principal'),
('FoodStuff', 'Plaza Mayor 101', 'Ciudad Secundaria'),
('TechZone', 'Avenida Tecnológica 234', 'Ciudad Tecnológica'),
('StyleHouse', 'Boulevard de la Moda 567', 'Ciudad de la Moda'),
('HomeDecor', 'Calle del Diseño 890', 'Ciudad Creativa'),
('FreshFoods', 'Avenida de los Frescos 111', 'Ciudad Saludable'),
('SportGear', 'Calle del Deporte 222', 'Ciudad Deportiva'),
('BookWorld', 'Boulevard de los Libros 333', 'Ciudad Literaria'),
('ToyLand', 'Calle de la Diversión 444', 'Ciudad Divertida'),
('GreenThumb', 'Avenida de las Plantas 555', 'Ciudad Ecológica'),
('TechGadgets', 'Plaza de la Tecnología 666', 'Ciudad Innovadora'),
('FashionTrends', 'Avenida de la Moda 777', 'Ciudad Fashionista'),
('HealthPlus', 'Calle de la Salud 888', 'Ciudad Saludable');

INSERT INTO Producto (id_proveedor, id_categoria, nombre_producto, imagen, precio_venta, precio_compra, cantidad, talla, genero_producto) 
VALUES 
(1, 1, 'Smartphone X', 'imagen_smartphone_x.jpg', 599.99, 450.00, 100, NULL, 'Unisex'),
(2, 2, 'Camiseta básica', 'imagen_camiseta_basica.jpg', 19.99, 10.00, 500, 'M', 'Hombre'),
(3, 2, 'Vestido veraniego', 'imagen_vestido_veraniego.jpg', 39.99, 25.00, 200, 'S', 'Mujer'),
(1, 3, 'Mesa de centro', 'imagen_mesa_centro.jpg', 149.99, 100.00, 50, NULL, 'Unisex'),
(4, 4, 'Arroz integral', 'imagen_arroz_integral.jpg', 2.99, 1.50, 1000, NULL, 'Unisex'),
(2, 2, 'Polo de manga corta', 'imagen_polo_manga_corta.jpg', 29.99, 15.00, 300, 'L', 'Hombre'),
(3, 2, 'Blusa floral', 'imagen_blusa_floral.jpg', 34.99, 20.00, 150, 'M', 'Mujer'),
(1, 3, 'Silla de comedor', 'imagen_silla_comedor.jpg', 79.99, 60.00, 80, NULL, 'Unisex'),
(4, 4, 'Aceite de oliva virgen', 'imagen_aceite_oliva.jpg', 5.99, 3.00, 500, NULL, 'Unisex'),
(5, 5, 'Champú reparador', 'imagen_champu_reparador.jpg', 9.99, 6.00, 200, NULL, 'Unisex'),
(6, 5, 'Crema hidratante facial', 'imagen_crema_hidratante.jpg', 14.99, 8.00, 300, NULL, 'Unisex'),
(7, 6, 'Balón de fútbol', 'imagen_balon_futbol.jpg', 19.99, 12.00, 100, NULL, 'Unisex'),
(8, 6, 'Raqueta de tenis', 'imagen_raqueta_tenis.jpg', 49.99, 35.00, 50, NULL, 'Unisex'),
(9, 7, 'Novela de ficción', 'imagen_libro_ficcion.jpg', 14.99, 8.00, 150, NULL, 'Unisex'),
(10, 7, 'Libro de cocina', 'imagen_libro_cocina.jpg', 24.99, 18.00, 100, NULL, 'Unisex'),
(11, 8, 'Muñeca de peluche', 'imagen_muneca_peluche.jpg', 29.99, 20.00, 200, NULL, 'Mujer'),
(12, 8, 'Juego de construcción', 'imagen_juego_construccion.jpg', 39.99, 30.00, 100, NULL, 'Unisex'),
(13, 1, 'Smartwatch', 'imagen_smartwatch.jpg', 129.99, 90.00, 80, NULL, 'Unisex'),
(14, 2, 'Pantalón vaquero', 'imagen_pantalon_vaquero.jpg', 49.99, 30.00, 200, 'L', 'Hombre'),
(15, 2, 'Falda larga', 'imagen_falda_larga.jpg', 44.99, 25.00, 150, 'M', 'Mujer'),
(1, 3, 'Sofá de dos plazas', 'imagen_sofa_dos_plazas.jpg', 349.99, 250.00, 30, NULL, 'Unisex'),
(2, 4, 'Leche desnatada', 'imagen_leche_desnatada.jpg', 1.99, 1.00, 300, NULL, 'Unisex'),
(3, 5, 'Cepillo de dientes eléctrico', 'imagen_cepillo_dientes.jpg', 29.99, 20.00, 150, NULL, 'Unisex'),
(4, 5, 'Crema solar SPF 50', 'imagen_crema_solar.jpg', 19.99, 12.00, 200, NULL, 'Unisex'),
(5, 6, 'Balón de baloncesto', 'imagen_balon_baloncesto.jpg', 24.99, 15.00, 100, NULL, 'Unisex'),
(6, 6, 'Red de bádminton', 'imagen_red_badminton.jpg', 39.99, 25.00, 50, NULL, 'Unisex'),
(7, 7, 'Libro de poesía', 'imagen_libro_poesia.jpg', 12.99, 8.00, 100, NULL, 'Unisex'),
(8, 7, 'Libro de historia', 'imagen_libro_historia.jpg', 18.99, 12.00, 80, NULL, 'Unisex'),
(9, 8, 'Oso de peluche', 'imagen_oso_peluche.jpg', 19.99, 15.00, 150, NULL, 'Unisex'),
(10, 8, 'Set de pinturas', 'imagen_set_pinturas.jpg', 29.99, 20.00, 100, NULL, 'Unisex'),
(11, 1, 'Auriculares inalámbricos', 'imagen_auriculares_inalambricos.jpg', 79.99, 50.00, 120, NULL, 'Unisex'),
(12, 2, 'Polo de manga larga', 'imagen_polo_manga_larga.jpg', 34.99, 20.00, 200, 'XL', 'Hombre'),
(13, 2, 'Blusa elegante', 'imagen_blusa_elegante.jpg', 49.99, 35.00, 100, 'L', 'Mujer'),
(14, 3, 'Lámpara de pie', 'imagen_lampara_pie.jpg', 69.99, 50.00, 80, NULL, 'Unisex'),
(15, 4, 'Pan integral', 'imagen_pan_integral.jpg', 1.49, 0.80, 500, NULL, 'Unisex'),
(1, 5, 'Gel de ducha', 'imagen_gel_ducha.jpg', 7.99, 4.00, 200, NULL, 'Unisex'),
(2, 5, 'Cepillo de pelo', 'imagen_cepillo_pelo.jpg', 12.99, 8.00, 150, NULL, 'Unisex'),
(3, 6, 'Pelota de golf', 'imagen_pelota_golf.jpg', 14.99, 10.00, 50, NULL, 'Unisex'),
(4, 6, 'Raqueta de bádminton', 'imagen_raqueta_badminton.jpg', 29.99, 20.00, 80, NULL, 'Unisex'),
(5, 7, 'Libro de ciencia ficción', 'imagen_libro_ciencia_ficcion.jpg', 16.99, 10.00, 100, NULL, 'Unisex'),
(6, 7, 'Enciclopedia', 'imagen_enciclopedia.jpg', 59.99, 40.00, 30, NULL, 'Unisex'),
(7, 8, 'Pato de peluche', 'imagen_pato_peluche.jpg', 9.99, 6.00, 200, NULL, 'Unisex'),
(8, 8, 'Puzzle de 1000 piezas', 'imagen_puzzle.jpg', 24.99, 18.00, 100, NULL, 'Unisex'),
(9, 1, 'Tablet Z', 'imagen_tablet_z.jpg', 399.99, 300.00, 50, NULL, 'Unisex'),
(10, 2, 'Camiseta deportiva', 'imagen_camiseta_deportiva.jpg', 24.99, 15.00, 250, 'M', 'Hombre'),
(11, 2, 'Falda corta', 'imagen_falda_corta.jpg', 34.99, 20.00, 150, 'S', 'Mujer'),
(12, 3, 'Lámpara de mesa', 'imagen_lampara_mesa.jpg', 29.99, 20.00, 70, NULL, 'Unisex'),
(13, 4, 'Jugo de naranja', 'imagen_jugo_naranja.jpg', 3.99, 2.00, 400, NULL, 'Unisex'),
(14, 5, 'Acondicionador', 'imagen_acondicionador.jpg', 6.99, 4.00, 250, NULL, 'Unisex'),
(15, 5, 'Protector labial', 'imagen_protector_labial.jpg', 4.99, 2.50, 300, NULL, 'Unisex');


INSERT INTO Tipo_pago (tipo_pago) 
VALUES 
('Tarjeta de crédito'),
('Transferencia bancaria'),
('Efectivo');

INSERT INTO Tipo_entrega (id_empleado, tipo_entrega, estado_entrega, direccion_entrega) 
VALUES 
(1, 'Envío a domicilio', 'En camino', 'Calle Principal 123, Ciudad'),
(2, 'Recogida en tienda', 'Pendiente', 'Avenida Central 456, Otra Ciudad'),
(3, 'Envío express', 'Entregado', 'Calle Secundaria 789, Ciudad Principal'),
(4, 'Recogida programada', 'Entregado', 'Plaza Mayor 101, Ciudad Secundaria');

-- Genarar mil ventas
DELIMITER //

CREATE PROCEDURE generar_ventas ()
BEGIN
    DECLARE contador INT DEFAULT 0;
    DECLARE id_cliente, id_tipo_pago, id_entrega INT;
    DECLARE fecha_compra DATE;
    DECLARE hora_compra TIME;
    
    -- Inicializar la fecha de compra desde el 1 de enero de 2022
    SET fecha_compra = '2022-01-01';
    
    WHILE contador < 1000 DO
        -- Generar valores aleatorios dentro de los rangos especificados
        SET id_cliente = FLOOR(RAND() * 30) + 1;  -- id_cliente entre 1 y 30
        SET id_tipo_pago = FLOOR(RAND() * 3) + 1;  -- id_tipo_pago entre 1 y 3
        SET id_entrega = FLOOR(RAND() * 4) + 1;  -- id_entrega entre 1 y 4
        
        -- Generar hora_compra entre 07:00:00 y 20:00:00
        SET hora_compra = SEC_TO_TIME(FLOOR(RAND() * 46800) + TIME_TO_SEC('07:00:00'));  -- 46800 segundos = 13 horas
        
        -- Insertar en la tabla Venta
        INSERT INTO Venta (id_cliente, id_tipo_pago, id_entrega, fecha_compra, hora_compra)
        VALUES (id_cliente, id_tipo_pago, id_entrega, fecha_compra, hora_compra);
        
        -- Incrementar la fecha de compra en 1 día para la próxima iteración
        SET fecha_compra = DATE_ADD(fecha_compra, INTERVAL 1 DAY);
        
        SET contador = contador + 1;
    END WHILE;
    
    SELECT 'Inserciones completadas' AS mensaje;
END //

DELIMITER ;

CALL generar_ventas();

-- Procedimineto almacenado para generar 2mil detalle_venta
DELIMITER //

CREATE PROCEDURE generar_detalle_ventas()
BEGIN
    DECLARE contador INT DEFAULT 0;
    DECLARE id_venta_actual INT DEFAULT 1;
    DECLARE id_producto_gen INT;
    DECLARE precio_unitario INT;
    DECLARE cantidad_compra INT;
    DECLARE num_detalles INT;
    
    WHILE contador < 4000 DO
        -- Generar un número aleatorio de detalles por venta entre 2 y 14
        SET num_detalles = FLOOR(RAND() * (14 - 2 + 1)) + 2;
        
        -- Insertar num_detalles registros para el id_venta_actual
        WHILE num_detalles > 0 AND id_venta_actual <= 1000 AND contador < 4000 DO
            SET id_producto_gen = FLOOR(RAND() * 50) + 1; -- Rango aleatorio para id_producto de 1 a 50
            SET precio_unitario = (SELECT precio_venta FROM Producto WHERE id_producto = id_producto_gen); -- Precio unitario obtenido del producto
            SET cantidad_compra = FLOOR(RAND() * 12) + 1; -- Cantidad de compra aleatoria de 1 a 12
            
            INSERT INTO Detalle_venta (id_venta, id_producto, precio_unitario, cantidad_compra)
            VALUES (id_venta_actual, id_producto_gen, precio_unitario, cantidad_compra);
            
            SET num_detalles = num_detalles - 1;
            SET contador = contador + 1;
        END WHILE;
        
        SET id_venta_actual = id_venta_actual + 1;
        
        -- Reiniciar id_venta_actual cuando llegue a mil
        IF id_venta_actual > 1000 THEN
            SET id_venta_actual = 1;
        END IF;
    END WHILE;
    
    SELECT 'Inserción de detalle de ventas completada' AS mensaje;
END //

DELIMITER ;

CALL generar_detalle_ventas();

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
    dv.id_detalle_venta AS id_hventa,
    V.id_venta,
    V.id_cliente,
    dv.id_producto,
    CONCAT(YEAR(fecha_compra), 
    LPAD(MONTH(fecha_compra), 2, '0'), 
    LPAD(DAY(fecha_compra), 2, '0'))
    AS id_tiempo,
    tp.tipo_pago,
    te.tipo_entrega,
    te.estado_entrega,
    dv.cantidad_compra,
    dv.precio_unitario
FROM 
    Venta V
INNER JOIN Detalle_venta dv ON V.id_venta = dv.id_venta
INNER JOIN Tipo_pago tp ON V.id_tipo_pago = tp.id_tipo_pago
INNER JOIN Tipo_entrega te ON V.id_entrega = te.id_entrega;
