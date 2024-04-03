import React, { useState, useEffect } from 'react';
import { Button, Container, Card, Row, Col, Form, Modal, FloatingLabel, Table } from 'react-bootstrap';
import { FaSearch, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Header from '../components/Header';
import '../styles/App.css';

function Venta({ rol }) {

    const [id_empleados, setId_empleados] = useState([]);
    const [id_empleado, setId_empleado] = useState('');

    // Crear un estado para cada campo del formulario
    const [tipo_entrega, setTipo_entrega] = useState('');
    const [estado_entrega, setEstado_entrega] = useState('');
    const [direccion_entrega, setDireccion_entrega] = useState('');


    useEffect(() => {
        // Realiza una solicitud a tu ruta para obtener las especialidades
        fetch('http://localhost:5000/crud/read_empleado')
            .then(response => response.json())
            .then(data => {
                // Actualiza el estado con las especialidades obtenidas
                setId_empleados(data);
            })
            .catch(error => {
                console.error('Error al obtener las especialidades', error);
            });
    }, []);

    const [formData, setFormData] = useState({
        id_cliente: '',
        id_tipo_pago: '',
        id_entrega: '',
    });

    const [fecha_compra, setFecha_compra] = useState('');
    const [hora_compra, setHora_compra] = useState('');
    const [cantidad_compra, setCantidad_compra] = useState('');

    const [empleados, setEmpleados] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [productos, setProductos] = useState([]);
    const [pagos, setPago] = useState([]);

    const [detalles_compra, setDetalles_compra] = useState([]);

    const [showClienteModal, setShowClienteModal] = useState(false);
    const [showEmpleadoModal, setShowEmpleadoModal] = useState(false);
    const [showProductoModal, setShowProductoModal] = useState(false);
    const [showPagoModal, setShowPagoModal] = useState(false);

    const [selectedCliente, setSelectedCliente] = useState(null);
    const [selectedEmpleado, setSelectedEmpleado] = useState(null);
    const [selectedProducto, setSelectedProducto] = useState(null);
    const [selectedPago, setSelectedPago] = useState(null);


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const AgregarDetalleProducto = () => {
        if (selectedProducto && cantidad_compra) {
            const nuevoDetalle = {
                id_producto: selectedProducto.id_producto,
                nombre_producto: selectedProducto.nombre_producto,
                imagen: selectedProducto.imagen,
                precio_venta: selectedProducto.precio_venta,
                cantidad_compra: cantidad_compra
            };
            setDetalles_compra([...detalles_compra, nuevoDetalle]);
            setCantidad_compra('');
            setSelectedProducto('');
        } else {
            alert('Asegúrese de selecionar un producto o ingresar una cantidad.');
        }
    };

    const EliminarDetalle = (id_producto) => {
        const detallesActualizados = detalles_compra.filter(detalle => detalle.id_producto !== id_producto);
        setDetalles_compra(detallesActualizados);
    };


    const filteredClientes = clientes.filter((cliente) => {
        // Convierte los valores de los campos a minúsculas para realizar una búsqueda insensible a mayúsculas y minúsculas
        const id_cliente = cliente.id_cliente;
        const nombre1_cliente = cliente.nombre1_cliente.toLowerCase();
        const nombre2_cliente = cliente.nombre2_cliente.toLowerCase();
        const apellido1_cliente = cliente.apellido1_cliente.toLowerCase();
        const apellido2_cliente = cliente.apellido2_cliente.toLowerCase();
        const search = searchQuery.toLowerCase();

        // Verifica si la cadena de búsqueda se encuentra en algún campo
        return (
            id_cliente == (search) ||
            nombre1_cliente.includes(search) ||
            nombre2_cliente.includes(search) ||
            apellido1_cliente.includes(search) ||
            apellido2_cliente.includes(search)
        );
    });

    const filteredProductos = productos.filter((producto) => {
        // Convierte los valores de los campos a minúsculas para realizar una búsqueda insensible a mayúsculas y minúsculas
        const id_producto = producto.id_producto;
        const nombre_producto = producto.nombre_producto.toLowerCase();
        const precio_venta = producto.precio_venta;
        const talla = producto.talla.toLowerCase();
        const genero = producto.genero.toLowerCase();
        const cantidad = producto.cantidad;
        const search = searchQuery.toLowerCase();

        // Verifica si la cadena de búsqueda se encuentra en algún campo
        return (
            id_producto == (search) ||
            nombre_producto.includes(search) ||
            precio_venta.includes(search) ||
            talla.includes(search) ||
            genero.includes(search) ||
            cantidad.includes(search)
        );
    });

    //Manejo de carga y selección de Clientes --------------------------------------
    const loadClientes = () => {
        fetch('http://localhost:5000/crud/read_cliente')
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error('Error al obtener los clientes:', error));
    };

    //Control de apertura de modal de Clientes
    const openClienteModal = () => {
        setShowClienteModal(true);
    };

    //Control de clierre de modal de Clientes
    const closeClienteModal = () => {
        setShowClienteModal(false);
        setSearchQuery('');
    };

    //Actualización de valor de variable de estado de Cliente selecionado
    const selectCliente = (cliente) => {
        setSelectedCliente(cliente);
        setFormData({
            ...formData,
            id_cliente: cliente.id_cliente,
        });
        closeClienteModal();
    };

    //Manejo de carga y selección de Empleados --------------------------------------
    const loadEmpleados = () => {
        fetch('http://localhost:5000/crud/read_empleado')
            .then((response) => response.json())
            .then((data) => setEmpleados(data))
            .catch((error) => console.error('Error al obtener los empleados:', error));
    };

    //Control de apertura de modal de Empleados
    const openEmpleadoModal = () => {
        setShowEmpleadoModal(true);
    };

    //Control de clierre de modal de Empleados
    const closeEmpleadoModal = () => {
        setShowEmpleadoModal(false);
    };

    //Actualización de valor de variable de estado de Empleado selecionado
    const selectEmpleado = (empleado) => {
        setSelectedEmpleado(empleado);
        setFormData({
            ...formData,
            id_empleado: empleado.id_empleado,
        });
        closeEmpleadoModal();
    };

    //Manejo de carga y selección de Productos --------------------------------------
    const loadProductos = () => {
        fetch('http://localhost:5000/crud/read_producto')
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error('Error al obtener los productos:', error));
    };

    //Control de apertura de modal de Empleados
    const openProductoModal = () => {
        setShowProductoModal(true);
    };

    //Control de clierre de modal de Empleados
    const closeProductoModal = () => {
        setShowProductoModal(false);
    };

    //Actualización de valor de variable de estado de Empleado selecionado
    const selectProducto = (producto) => {
        setSelectedProducto(producto);
        setFormData({
            ...formData,
            id_producto: producto.id_producto,
        });
        closeProductoModal();
    };

    //Manejo de carga y selección de Empleados --------------------------------------
    const loadPagos = () => {
        fetch('http://localhost:5000/crud/read_tipo_pago')
            .then((response) => response.json())
            .then((data) => setPago(data))
            .catch((error) => console.error('Error al obtener los empleados:', error));
    };

    //Control de apertura de modal de Empleados
    const openPagoModal = () => {
        setShowPagoModal(true);
    };

    //Control de clierre de modal de Empleados
    const closePagoModal = () => {
        setShowPagoModal(false);
    };

    //Actualización de valor de variable de estado de Empleado selecionado
    const selectPago = (pago) => {
        setSelectedPago(pago);
        setFormData({
            ...formData,
            id_tipo_pago: pago.id_tipo_pago,
        });
        closePagoModal();
    };

    //Carga de datos de Clientes, Empleados y Productos
    useEffect(() => {
        loadClientes();
        loadEmpleados();
        loadProductos();
        loadPagos();
    }, []);

    const handleImagenChange = (event) => {
        const file = event.target.files[0]; // Obtener el primer archivo seleccionado

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result; // Obtener la imagen en formato base64
            setFormData({
                ...formData,
                imagen: base64String
            });
        };
        if (file) {
            reader.readAsDataURL(file); // Lee el contenido del archivo como base64
        }
    };


    const registrarVentaYTipoEntrega = async (e) => {
        e.preventDefault();

        // Llamada a la función para registrar la venta
        if (fecha_compra && hora_compra && selectedCliente && selectedEmpleado && detalles_compra.length > 0) {
            const dataVenta = {
                fecha_compra: fecha_compra,
                hora_compra: hora_compra,
                id_cliente: selectedCliente.id_cliente,
                detalle_compra: detalles_compra,
            };

            // Realizar la solicitud para registrar la venta
            try {
                const responseVenta = await fetch('http://localhost:5000/crud/create_compra', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataVenta),
                });

                if (responseVenta.ok) {
                    console.log('Venta registrada con éxito');
                    alert('¡Venta registrada con éxito!');
                    setFecha_compra('');
                    setHora_compra('');
                    setDetalles_compra([]);
                    // Limpia otros estados según sea necesario
                } else {
                    console.error('Error al registrar la venta');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                alert('Error en la solicitud al servidor');
            }

            // Llamada a la función para registrar el tipo de entrega
            const formDataTipoEntrega = {
                id_empleado,
                tipo_entrega,
                estado_entrega,
                direccion_entrega,
            };

            try {
                const responseTipoEntrega = await fetch('http://localhost:5000/crud/create_tipo_entrega', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formDataTipoEntrega),
                });

                if (responseTipoEntrega.ok) {
                    alert('Registro exitoso');
                    setId_empleado('');
                    setTipo_entrega('');
                    setEstado_entrega('');
                    setDireccion_entrega('');
                } else {
                    alert('Error al registrar el producto');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                alert('Error en la solicitud al servidor');
            }
        } else {
            alert('Asegúrese de completar la información necesaria para registrar la venta.');
        }
    };



    return (
        <div>
            <Header rol={rol} />

            <Container className="margen-contenedor">
                <Card className="global-margin-top">
                    <Card.Body>
                        <Card.Title className="mt-3 title">Registro de Venta</Card.Title>
                        <Form className="mt-3" >
                            <Row className="g-3">

                                <Col sm="12" md="4" lg="4">
                                    <FloatingLabel controlId="Tipopago" label="Tipo pago">
                                        <Form.Control
                                            type="text"
                                            placeholder="Seleccionar metodo de pago"
                                            name="Tipopago"
                                            value={selectedPago ? selectedPago.tipo : ''}
                                            readOnly
                                        />
                                        <div className="button-container">
                                            <Button className="search-button" variant="outline-primary" onClick={openPagoModal}>
                                                <FaSearch />
                                            </Button>
                                        </div>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="2" lg="4">
                                    <FloatingLabel controlId="id_empleado" label="Empleado">
                                        <Form.Select
                                            aria-label="id_empleado"
                                            value={id_empleado}
                                            onChange={(e) => setId_empleado(e.target.value)}
                                        >
                                            <option>Seleccione un empleado</option>
                                            {id_empleados.map((empleado) => (
                                                <option key={empleado.id_empleado} value={empleado.id_empleado}>
                                                    {empleado.nombre1_empleado + ' '}
                                                    {empleado.nombre2_empleado + ' '}
                                                    {empleado.apellido1_empleado + ' '}
                                                    {empleado.apellido2_empleado}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="6" lg="4">
                                    <FloatingLabel controlId="tipo_entrega" label="Tipo entrega">
                                        <Form.Select
                                            aria-label="tipo_entrega"
                                            value={tipo_entrega}
                                            onChange={(e) => setTipo_entrega(e.target.value)}
                                        >
                                            <option>Seleccione el tipo de entrega</option>
                                            <option value="Entrega a domicilio">Entrega a domicilio</option>
                                            <option value="Entrega en tienda">Entrega en tienda</option>
                                            <option value="Entrega en punto de recogida">Entrega en punto de recogida</option>
                                            <option value="Entrega express">Entrega express</option>
                                            <option value="Entrega programada">Entrega programada</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="6" lg="4">
                                    <FloatingLabel controlId="estado_entrega" label="Estado entrega">
                                        <Form.Select
                                            aria-label="estado_entrega"
                                            value={estado_entrega}
                                            onChange={(e) => setEstado_entrega(e.target.value)}
                                        >
                                            <option>Estado entrega</option>
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="Proceso de entrega">Proceso de entrega</option>
                                            <option value="Entregado">Entregado</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="6" lg="6">
                                    <FloatingLabel controlId="direccion_entrega" label="Direccion entrega">
                                        <Form.Control
                                            as="textarea"
                                            className="auto-expand-textarea" // Aplica la clase personalizada aquí
                                            placeholder="Ingrese la direccion de entrega"
                                            value={direccion_entrega}
                                            onChange={(e) => {
                                                setDireccion_entrega(e.target.value);
                                                e.target.style.height = 'auto'; // Restablece la altura a 'auto' para calcular la nueva altura
                                                e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta la altura automáticamente
                                            }}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="4" lg="4">
                                    <FloatingLabel controlId="cliente" label="Cliente">
                                        <Form.Control
                                            ttype="text"
                                            placeholder="Seleccionar Cliente"
                                            name="cliente"
                                            value={selectedCliente ? `${selectedCliente.nombre1_cliente} ${selectedCliente.nombre2_cliente} ${selectedCliente.apellido1_cliente} ${selectedCliente.apellido2_cliente}` : ''}
                                            readOnly

                                        />
                                        <div className="button-container">
                                            <Button className="search-button" variant="outline-primary" onClick={openClienteModal}>
                                                <FaSearch />
                                            </Button>
                                        </div>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="4" lg="4">
                                    <FloatingLabel controlId="fecha_compra" label="Fecha">
                                        <Form.Control
                                            type="date"
                                            placeholder="Seleccione la fecha venta"
                                            value={fecha_compra}
                                            onChange={(e) => setFecha_compra(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="4" lg="4">
                                    <FloatingLabel controlId="hora_compra" label="Hora">
                                        <Form.Control
                                            type="time"
                                            placeholder="Seleccione la hora compra"
                                            value={hora_compra}
                                            onChange={(e) => setHora_compra(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="4" lg="4">
                                    <FloatingLabel controlId="producto" label="Producto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Seleccionar Producto"
                                            name="producto"
                                            value={selectedProducto ? selectedProducto.nombre_producto : ''}
                                            readOnly
                                        />
                                        <div className="button-container">
                                            <Button className="search-button" variant="outline-primary" onClick={openProductoModal}>
                                                <FaSearch />
                                            </Button>
                                        </div>
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="2" lg="2" className="">
                                    <FloatingLabel controlId="cantidad_compra" label="Cantidad">
                                        <Form.Control
                                            type="number"
                                            placeholder="Cantidad de Producto"
                                            value={cantidad_compra}
                                            onChange={(e) => setCantidad_compra(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col sm="12" md="2" lg="2" className="d-flex align-items-center">
                                    <Button onClick={AgregarDetalleProducto} variant="outline-success" size="lg">
                                        <FaPlus />
                                    </Button>
                                </Col>

                                <div className="divider"></div>

                                <Col sm="12" md="1" lg="12">
                                    <Card className="global-margin-top">
                                        <Card.Body>
                                            <Card.Title className="mt-3 title">Detalle de productos</Card.Title>
                                            <Table striped bordered hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nombre</th>
                                                        <th>Imagen</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th>Subtotal</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {detalles_compra.map((detalle) => (
                                                        <tr key={detalle.id_producto}>
                                                            <td>{detalle.id_producto}</td>
                                                            <td>{detalle.nombre_producto}</td>
                                                            <td>
                                                                {/* Muestra la imagen en base64 */}
                                                                <img src={detalle.imagen} alt={detalle.nombre} style={{ width: '100px' }} />
                                                            </td>
                                                            <td>{detalle.precio_venta}</td>
                                                            <td>{detalle.cantidad_compra}</td>
                                                            <td>{detalle.cantidad_compra * detalle.precio_venta}</td>
                                                            <td className="align-button">
                                                                <Button
                                                                    size="sm"
                                                                    onClick={() => EliminarDetalle(detalle.id_producto)}
                                                                    variant="danger">

                                                                    <FaTrashAlt />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                            <div className="divider"></div>

                            <div className="center-button">
                                <Button onClick={registrarVentaYTipoEntrega} variant="primary" size="lg">
                                    Registrar
                                </Button>

                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={showClienteModal} onHide={closeClienteModal} centered scrollable size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Seleccionar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col sm="12" md="12" lg="12">
                            <FloatingLabel controlId="search" label="Buscar">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Primer nombre</th>
                                <th>Segundo nombre</th>
                                <th>Primer apellido</th>
                                <th>Segundo apellido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClientes.map((cliente) => (
                                <tr key={cliente.id_cliente} onClick={() => selectCliente(cliente)}>
                                    <td>{cliente.id_cliente}</td>
                                    <td>{cliente.nombre1_cliente}</td>
                                    <td>{cliente.nombre2_cliente}</td>
                                    <td>{cliente.apellido1_cliente}</td>
                                    <td>{cliente.apellido2_cliente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>

            <Modal show={showEmpleadoModal} onHide={closeEmpleadoModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Seleccionar Empleado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {empleados.map((empleado) => (
                        <div className="Seleccion" key=
                            {empleado.id_empleado} onClick={() => selectEmpleado(empleado)}>
                            {empleado.nombre1_empleado}
                            {empleado.nombre2_empleado}
                            {empleado.apellido1_empleado}
                            {empleado.apellido2_empleado}
                        </div>
                    ))}
                </Modal.Body>
            </Modal>

            <Modal show={showProductoModal} onHide={closeProductoModal} centered scrollable size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Seleccionar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col sm="12" md="12" lg="12">
                            <FloatingLabel controlId="search" label="Buscar">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Producto</th>
                                <th>Precio venta</th>
                                <th>Talla</th>
                                <th>Genero</th>
                                <th>Cantidad</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProductos.map((producto) => (
                                <tr key={producto.id_producto} onClick={() => selectProducto(producto)}>
                                    <td>{producto.id_producto}</td>
                                    <td>{producto.nombre_producto}</td>
                                    <td>{producto.precio_venta}</td>
                                    <td>{producto.talla}</td>
                                    <td>{producto.genero}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>
                                        {/* Muestra la imagen en base64 */}
                                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px' }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>

            <Modal show={showPagoModal} onHide={closePagoModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Seleccionar metodo de pago</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {pagos.map((pago) => (
                        <div className="Seleccion" key={pago.id_tipo_pago} onClick={() => selectPago(pago)}>
                            {pago.tipo}
                        </div>
                    ))}
                </Modal.Body>
            </Modal>

        </div>
    );
}

export default Venta;