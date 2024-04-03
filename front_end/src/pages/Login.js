import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const Login = ({ setRol }) => {
  const navigate = useNavigate();
  const [nombre_Usuario, setNombre_Usuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const handleSubmit = async event => {
    event.preventDefault();

    // Objeto con los datos del formulario
    const formData = {
      nombre_Usuario,
      contrasena
    };

    try {
      const response = await fetch('http://localhost:5000/crud/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const { rol } = await response.json();
        setRol(rol);
        navigate('/Catalogo');
      } else {
        // Manejar el caso de credenciales incorrectas estableciendo el estado de error
        setError('¡Credenciales incorrectas!');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
      // Manejar otros errores estableciendo el estado de error
      setError('Error en la solicitud. Inténtalo de nuevo más tarde.');
    }
  };

  const handleInputClick = () => {
    setError(null);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Row className="justify-content-md-center">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">Inicio de Sesión</Card.Title>
              <Form onSubmit={handleSubmit}>

                <Row>
                  <Col sm="12" md="12" lg="12" className="mb-3">
                    <FloatingLabel controlId="nombre_Usuario" label="Ingrese su usuario">
                      <Form.Control
                        placeholder="Ingrese su usuario"
                        type="text"
                        value={nombre_Usuario}
                        onChange={(e) => setNombre_Usuario(e.target.value)}
                        onClick={handleInputClick}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm="12" md="12" lg="12">
                    <FloatingLabel controlId="contrasena" label="Ingrese su contraseña">
                      <Form.Control
                        placeholder="Ingrese su contraseña"
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        onClick={handleInputClick}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                {/* Mensaje de error */}
                <Row className="mt-3">
                  <Col>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col sm="12" md="15" lg="12">
                    <div className="center-button">
                      <Button variant="primary" type="submit" block className="mt-3">
                        Iniciar Sesión
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

};

export default Login;
