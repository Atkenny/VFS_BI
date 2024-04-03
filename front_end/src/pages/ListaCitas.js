import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel } from 'react-bootstrap';
import Header from '../components/Header';
import { FaTrashCan, FaPencil } from 'react-icons/fa6';
import '../styles/App.css';

function ListaCitas({ rol }) {

    const [citas, setCitas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCita, setSelectedCita] = useState({});
    const [formData, setFormData] = useState({

        id_cliente: '',
        id_empleado: '',
        tipo_servicio: '',
        fecha_cita: '',
        hora_cita: '',
        estado_cita: '',
        comentario: ''
    });

    const [clientes, setclientes] = useState([]); // Estado para almacenar las categorías
    const [empleados, setempleados] = useState([]); // Estado para almacenar los proveedores

    // Realiza una solicitud GET al servidor para obtener los proveedores
    useEffect(() => {
        fetch('http://localhost:5000/crud/read_empleado')
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzar un error
                    throw new Error('Error al obtener la lista de empleados. Por favor, inténtelo de nuevo.');
                }
                return response.json();
            })
            .then((data) => {
                // Actualizar el estado con los datos obtenidos
                setempleados(data);
            })
            .catch((error) => {
                console.error('Error al obtener la lista de empleados:', error);
                alert('Ocurrió un error al obtener la lista de empleados. Por favor, inténtelo de nuevo.');
            });
    }, []);

    // Realiza una solicitud GET al servidor para obtener las categorías
    useEffect(() => {
        fetch('http://localhost:5000/crud/read_cliente')
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzar un error
                    throw new Error('Error al obtener la lista de categorías. Por favor, inténtelo de nuevo.');
                }
                return response.json();
            })
            .then((data) => {
                // Actualizar el estado con los datos obtenidos
                setclientes(data);
            })
            .catch((error) => {
                console.error('Error al obtener la lista de clientes:', error);
                alert('Ocurrió un error al obtener la lista de clientes. Por favor, inténtelo de nuevo.');
            });
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

    // Crear busqueda
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCitas = citas.filter((cita) => {
        // Convierte los valores de los campos a minúsculas para realizar una búsqueda insensible a mayúsculas y minúsculas

        const id_cliente = cita.id_cliente;
        const id_empleado = cita.id_empleado;
        const tipo_servicio = cita.tipo_servicio.toLowerCase();
        const fecha_cita = cita.fecha_cita;
        const hora_cita = cita.hora_cita;
        const estado_cita = cita.estado_cita;
        const comentario = cita.comentario.toLowerCase();
        const search = searchQuery.toLowerCase();


        // Verifica si la cadena de búsqueda se encuentra en algún campo
        return (

            id_cliente == (search) ||
            id_empleado == (search) ||
            tipo_servicio.includes(search) ||
            fecha_cita == (search) ||
            hora_cita == (search) ||
            estado_cita == (search) ||
            comentario.includes(search)
        );
    });

    // Función para abrir el modal y pasar los datos del producto seleccionado
    const openModal = (cita) => {
        setSelectedCita(cita);

        setFormData({

            id_cliente: cita.id_cliente,
            id_empleado: cita.id_empleado,
            tipo_servicio: cita.tipo_servicio,
            fecha_cita: cita.fecha_cita,
            hora_cita: cita.hora_cita,
            estado_cita: cita.estado_cita,
            comentario: cita.comentario
        });
        setShowModal(true);
    };

    const loadCita = () => {
        fetch('http://localhost:5000/crud/read_cita')
            .then((response) => response.json())
            .then((data) => setCitas(data))
            .catch((error) => console.error('Error al obtener lista de citas:', error));
    };

    // Función para manejar cambios en el formulario
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleUpdate = () => {

        // Realiza la solicitud PUT al servidor para actualizar el registro
        fetch(`http://localhost:5000/crud/update_cita/${selectedCita.id_cita}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    // La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de productos
                    setShowModal(false);
                    loadCita(); // Cargar la lista de productos actualizada
                }
            })
            .catch((error) => console.error('Error al actualizar el registro:', error));
    };


    // Función para eliminar un docente
    const handleDelete = (id_cita) => {
        const confirmation = window.confirm('¿Seguro que deseas eliminar esta cita?');
        if (confirmation) {
            // Realiza la solicitud DELETE al servidor para eliminar el docente
            fetch(`http://localhost:5000/crud/delete_cita/${id_cita}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        // La eliminación fue exitosa, refresca la lista de docentes
                        loadCita();
                    }
                })
                .catch((error) => console.error('Error al eliminar la cita:', error));
        }
    };

    // Realiza una solicitud GET al servidor para obtener los docentes
    useEffect(() => {
        fetch('http://localhost:5000/crud/read_cita')
            .then((response) => response.json())
            .then((data) => setCitas(data))
            .catch((error) => console.error('Error al obtener lista de citas:', error));
    }, []);

    return (
        <div>
            <Header rol={rol} />

            <Card className="mt-5">
                <Card.Body>
                    <Card.Title className="mb-3">Listado de citas</Card.Title>

                    <Row className="mb-3">
                        <Col>
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
                                <th abbr="Id">Id</th>
                                <th style={{ display: 'none' }}>IDCliente</th>
                                <th>Cliente</th>
                                <th style={{ display: 'none' }}>IDProveedor</th>
                                <th>Empleado</th>
                                <th>Servicio</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>comentario</th>
                                <th>Editar</th>
                                <th>Eliminar</th>

                            </tr>
                        </thead>
                        <tbody>
                            {filteredCitas.map((cita) => (
                                <tr key={cita.id_cita}>
                                    <td>{cita.id_cita}</td>
                                    <td style={{ display: 'none' }}>{cita.id_cliente}</td>
                                    <td>{cita.nombre1_cliente + ' ' + cita.apellido1_cliente}</td>
                                    <td style={{ display: 'none' }}>{cita.id_empleado}</td>
                                    <td>{cita.nombre1_empleado + ' ' + cita.apellido1_empleado}</td>
                                    <td>{cita.tipo_servicio}</td>
                                    <td>{cita.fecha_cita}</td>
                                    <td>{cita.hora_cita}</td>
                                    <td>
                                        {/* Utiliza la clase de estilo según el estado de la cita */}
                                        <span className={cita.estado_cita === 'Aceptada' ? 'punto-rojo' : 'punto-verde'}></span>
                                    </td>
                                    <td>{cita.comentario}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => openModal(cita)}><FaPencil /></Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(cita.id_cita)}><FaTrashCan /></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar cita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>Registro de cita</Card.Title>
                            <Form className="mt-3">
                                <Row className="g-3">

                                    <FloatingLabel controlId="clientes" label="Clientes">
                                        <Form.Select
                                            aria-label="clientes"
                                            value={formData.id_cliente}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    id_cliente: e.target.value
                                                })
                                            }
                                        >
                                            <option>Seleccione un cliente</option>
                                            {clientes.map((cliente) => (
                                                <option key={cliente.id_cliente} value={cliente.id_cliente}>
                                                    {cliente.nombre1_cliente + ' ' + cliente.apellido1_cliente}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </FloatingLabel>

                                    <Col sm="12" md="6" lg="6">
                                        <FloatingLabel controlId="empleados" label="Empleados">
                                            <Form.Select
                                                aria-label="empleados"
                                                value={formData.id_empleado}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        id_empleado: e.target.value
                                                    })
                                                }
                                            >
                                                <option>Seleccione un empleado</option>
                                                {empleados.map((empleado) => (
                                                    <option key={empleado.id_empleado} value={empleado.id_empleado}>
                                                        {empleado.nombre1_empleado + ' ' + empleado.apellido1_empleado}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                    <Col sm="6" md="6" lg="4">
                                        <FloatingLabel controlId="tipo_servicio" label="Servicio">
                                            <Form.Control
                                                type="text"
                                                placeholder="Ingrese el tipo de servicio"
                                                name="tipo_servicio"
                                                value={formData.tipo_servicio}
                                                onChange={handleFormChange}
                                            />
                                        </FloatingLabel>
                                    </Col>

                                    <Col sm="6" md="6" lg="4">
                                        <FloatingLabel controlId="fecha_cita" label="Fecha">
                                            <Form.Control
                                                type="date"
                                                placeholder="Ingrese la fecha de la cita"
                                                name="fecha_cita"
                                                value={formData.fecha}
                                                onChange={handleFormChange}
                                            />
                                        </FloatingLabel>
                                    </Col>

                                    <Col sm="6" md="6" lg="4">
                                        <FloatingLabel controlId="hora_cita" label="Hora">
                                            <Form.Control
                                                type="time"
                                                placeholder="Ingrese la hora de la cita"
                                                name="hora_cita"
                                                value={formData.hora_cita}
                                                onChange={handleFormChange}
                                            />
                                        </FloatingLabel>
                                    </Col>

                                    <Col sm="6" md="6" lg="4">
                                        <FloatingLabel controlId="estado_cita" label="">
                                            <Form.Check
                                                type="checkbox"
                                                label="Estado cita"
                                                checked={formData.estado_cita} 
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        estado_cita: e.target.checked,
                                                    })
                                                }
                                            />
                                        </FloatingLabel>
                                    </Col>


                                    <Col sm="6" md="6" lg="4">
                                        <FloatingLabel controlId="comentario" label="Comentario">
                                            <Form.Control
                                                type="text"
                                                placeholder="Ingrese su comentario"
                                                name="comentarui"
                                                value={formData.comentario}
                                                onChange={handleFormChange}
                                            />
                                        </FloatingLabel>
                                    </Col>

                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ListaCitas;
