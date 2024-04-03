Use database_vfs;
Select * from bitacora;

-- CRUD Cliente
CALL InsertarCliente(
    'Kenny',
    'Antonio',
    'Tellez',
    'Obando',
    '2004-09-24',
    '123456789',
    'kennyt@gmail.com',
    'contrasena123'
);
INSERT INTO Empleado (nombre1_empleado, nombre2_empleado, apellido1_empleado, apellido2_empleado, especialidad_empleado, telefono_empleado, email_empleado, contrasena_empleado)
VALUES ('Kenny', 'Antonio', 'Tellez', 'Obando', 'administrador', '5678-8998', 'hola@gmail.com', '1234');

CALL ActualizarCliente(
    1, 
    'Antonio',
    'Kenny', 
    'Obando', 
    'Tellez', 
    '2004-09-25', 
    '83347188', 
    'nuevo@email.com', 
    'NuevaContrasena'
);

Call MostrarCliente(1);

CALL EliminarCliente(1);

-- CRUD Empleado
CALL InsertarEmpleado(
    'Gisela',
    'Paola',
    'Rocha',
    'Cruz',
    'Delivery',
    '123456789',
    'empleado@email.com',
    'contrasena123'
);

CALL ActualizarEmpleado(
	1,
    'Gisela',
    'Paola',
    'Rocha',
    'Cruz',
    'Pedicurista',
    '83310234',
    'empleado@email.com',
    'contrasena1234'
);

Call MostrarEmpleado(1);

CALL EliminarEmpleado(1);

-- CRUD Producto
CALL InsertarProducto(
    1, 
    2, 
    'Nombre del Producto', 
    'DatosBLOB', 
    49.99, 
    29.99, 
    100, 
    'Talla L', 
    'Descripción del Producto', 
    'M'
);

CALL ActualizarProducto(
	1,
    1, 
    2, 
    'Nombre del Producto', 
    'DatosBLOB', 
    49.99, 
    29.99, 
    100, 
    'Talla L', 
    'Descripción del Producto', 
    'M'
);

CALL MostrarProducto(1);

CALL EliminarProducto(1);

-- CRUD Categoria 
CALL InsertarCategoria('Nombre de la Categoría', 'Descripción de la Categoría');

CALL ActualizarCategoria(1, 'Nuevo Nombre de Categoría', 'Nueva Descripción de Categoría');

CALL MostrarCategoria(1);

CALL EliminarCategoria(1);

-- CRUD Cita
CALL InsertarCita(1, 2, 'Corte de Pelo', '2023-10-02', '14:30:00', TRUE, 'Comentario de la Cita');

CALL ActualizarCita(1, 3, 4, 'Nuevo Tipo de Servicio', '2023-10-03', '15:00:00', FALSE, 'Nuevo Comentario');

CALL MostrarCita(1);

CALL EliminarCita(1);

-- CRUD Compra 
CALL InsertarCompra(1, 2, 3, '2023-10-02', '14:30:00');

CALL ActualizarCompra(1, 2, 3, 4, '2023-10-03', '15:00:00');

CALL MostrarCompra(1);

CALL EliminarCompra(1);

-- CRUD Tipo de pago 
CALL InsertarTipoPago('Tarjeta de Crédito');

CALL MostrarTipoPago(1);

CALL EliminarTipoPago(1);

-- CRUD Tipo en trega 
CALL InsertarTipoEntrega(1, 'Entrega a domicilio', 'En proceso', 'Calle Principal #123');

CALL ActualizarTipoEntrega(1, 2, 'Entrega a domicilio', 'En proceso', 'Nueva Dirección');

CALL MostrarTipoEntrega(1);

-- CRUD Detalle de compra 
CALL EliminarTipoEntrega(1);

-- CRUD Resena
CALL InsertarDetalleCompra(1, 2, 5);

CALL MostrarResena(1);

CALL EliminarResena(1);

-- CRUD Lista de deseos 
CALL InsertarListaDeseos(1, '2023-10-02 14:30:00');

CALL ActualizarListaDeseos(1, '2023-10-02 15:00:00');

CALL MostrarListaDeseos(1);

CALL EliminarListaDeseos(1);

-- CRUD Lista de detalle 
CALL InsertarElementoListaDeseos(1, 2);

CALL MostrarDetalleListaDeseos(1);

CALL EliminarDetalleListaDeseos(1);

-- CRUD Proveedor 
CALL InsertarProveedor('Nombre de la Empresa', 'Dirección del Proveedor', 'Ciudad del Proveedor');

CALL ActualizarProveedor(1, 'Nuevo Nombre de la Empresa', 'Nueva Dirección del Proveedor', 'Nueva Ciudad del Proveedor');

CALL MostrarProveedor(1);

CALL EliminarProveedor(1);
 




