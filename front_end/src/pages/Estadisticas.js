import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  ButtonGroup,
  Button,
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";
import jsPDF from "jspdf";
import Chart from "chart.js/auto";
import "../styles/App.css";
import html2canvas from "html2canvas";
import Footer from "../components/Footer";

function Estadisticas({ rol }) {
  const [productos, setProductos] = useState([]);
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  const [top5Productos, setTop5Productos] = useState([]);
  const [top5Clientes, setTop5Clientes] = useState([]);
  const [inversionYBeneficioMes, setInversionYBeneficioMes] = useState([]);
  const [gananciasPorVenta, setGananciasPorVenta] = useState([]);
  const [totalInversionBeneficio, setTotalInversionBeneficio] = useState([]);
  const [gananciaPorGenero, setGananciaPorGenero] = useState([]);
  const [generoClienteCompras, setGeneroClienteCompras] = useState([]);
  const [comprasFisicaOnline, setComprasFisicaOnline] = useState([]);
  function formatearNumeroConComas(numero) {
    const numeroFormateado = Number(numero).toFixed(2);
    return numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetch("http://localhost:5000/crud/read_producto")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud/ProductosPorCategoria")
      .then((response) => response.json())
      .then((data) => setProductosPorCategoria(data))
      .catch((error) =>
        console.error("Error al obtener los productos por categoria", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/top5Productos")
      .then((response) => response.json())
      .then((data) => setTop5Productos(data))
      .catch((error) =>
        console.error("Error al obtener los top 5 productos:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/top5Clientes")
      .then((response) => response.json())
      .then((data) => setTop5Clientes(data))
      .catch((error) =>
        console.error("Error al obtener los top 5 clientes:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/InversionYBeneficioMes")
      .then((response) => response.json())
      .then((data) => setInversionYBeneficioMes(data))
      .catch((error) =>
        console.error(
          "Error al obtener la inversión y beneficio por mes:",
          error
        )
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/GananciasPorVenta")
      .then((response) => response.json())
      .then((data) => setGananciasPorVenta(data))
      .catch((error) =>
        console.error("Error al obtener las ganancias por venta:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/Total_InvercionBeneficio")
      .then((response) => response.json())
      .then((data) => setTotalInversionBeneficio(data))
      .catch((error) =>
        console.error("Error al obtener la inversión y beneficio total:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/GananciaPorGenero")
      .then((response) => response.json())
      .then((data) => setGananciaPorGenero(data))
      .catch((error) =>
        console.error("Error al obtener la ganancia por género:", error)
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/GeneroClienteCompras")
      .then((response) => response.json())
      .then((data) => setGeneroClienteCompras(data))
      .catch((error) =>
        console.error(
          "Error al obtener las compras por género de cliente:",
          error
        )
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/crud2/Compras_FisicaOnline")
      .then((response) => response.json())
      .then((data) => setComprasFisicaOnline(data))
      .catch((error) =>
        console.error("Error al obtener las compras físicas y online:", error)
      );
  }, []);

  useEffect(() => {
    if (productosPorCategoria.length > 0) {
      const ctx = document.getElementById("myCategories");

      const labels = productosPorCategoria.map(
        (categoria) => categoria.nombre_categoria
      );
      const data = productosPorCategoria.map(
        (categoria) => categoria.CantidadProductos
      );

      const existingChart = Chart.getChart("myCategories");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Cantidad de productos por categoria",
              data: data,
              backgroundColor: [
                "rgba(255,99,132,0.5)",
                "rgba(54,162,235,0.5)",
                "rgba(255,206,86,0.5)",
                "rgba(75,192,192,0.5)",
                "rgba(153,102,255,0.5)",
                "rgba(255,159,64,0.5)",
              ],
              borderColor: [
                "rgba(255,99,132,0.5)",
                "rgba(54,162,235,0.5)",
                "rgba(255,206,86,0.5)",
                "rgba(75,192,192,0.5)",
                "rgba(153,102,255,0.5)",
                "rgba(255,159,64,0.5)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Cantidad de productos por categoria",
            },
          },
        },
      });
    }
  }, [productosPorCategoria]);

  useEffect(() => {
    if (top5Productos.length > 0) {
      const ctx = document.getElementById("top5Productos");

      const labels = top5Productos.map((producto) => producto.nombre_producto);
      const data = top5Productos.map((producto) => producto.total_vendido);

      const existingChart = Chart.getChart("top5Productos");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Top 5 Productos Más Vendidos",
              data: data,
              backgroundColor: "rgba(75,192,192,0.5)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [top5Productos]);

  useEffect(() => {
    if (top5Clientes.length > 0) {
      const ctx = document.getElementById("top5Clientes");

      const labels = top5Clientes.map((cliente) => cliente.nombre_cliente);
      const data = top5Clientes.map((cliente) => cliente.total_compras);

      const existingChart = Chart.getChart("top5Clientes");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Top 5 Clientes con Más Compras",
              data: data,
              backgroundColor: "rgba(153,102,255,0.5)",
              borderColor: "rgba(153,102,255,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [top5Clientes]);

  useEffect(() => {
    if (inversionYBeneficioMes.length > 0) {
      const ctx = document.getElementById("inversionYBeneficioMes");

      const labels = inversionYBeneficioMes.map(
        (item) => `${item.nombre_producto} - ${item.mes}/${item.anio}`
      );
      const inversionData = inversionYBeneficioMes.map(
        (item) => item.monto_inversion
      );
      const beneficioData = inversionYBeneficioMes.map(
        (item) => item.monto_beneficio
      );

      const existingChart = Chart.getChart("inversionYBeneficioMes");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Monto de Inversión",
              data: inversionData,
              backgroundColor: "rgba(255,99,132,0.5)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
            },
            {
              label: "Monto de Beneficio",
              data: beneficioData,
              backgroundColor: "rgba(54,162,235,0.5)",
              borderColor: "rgba(54,162,235,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [inversionYBeneficioMes]);

  useEffect(() => {
    if (gananciasPorVenta.length > 0) {
      const ctx = document.getElementById("gananciasPorVenta");

      const labels = gananciasPorVenta.map(
        (item) => `${item.mes}/${item.anio}`
      );
      const gananciasData = gananciasPorVenta.map(
        (item) => item.total_ganancias
      );
      const ventasData = gananciasPorVenta.map(
        (item) => item.total_cantidad_ventas
      );

      const existingChart = Chart.getChart("gananciasPorVenta");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Total Ganancias",
              data: gananciasData,
              backgroundColor: "rgba(255,159,64,0.5)",
              borderColor: "rgba(255,159,64,1)",
              borderWidth: 1,
            },
            {
              label: "Total Cantidad de Ventas",
              data: ventasData,
              backgroundColor: "rgba(75,192,192,0.5)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [gananciasPorVenta]);

  useEffect(() => {
    if (totalInversionBeneficio.length > 0) {
      const ctx = document.getElementById("totalInversionBeneficio");

      const labels = ["Total Inversión", "Total Beneficio"];
      const data = [
        totalInversionBeneficio[0].total_inversion,
        totalInversionBeneficio[0].total_beneficio,
      ];

      const existingChart = Chart.getChart("totalInversionBeneficio");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Inversión y Beneficio Total",
              data: data,
              backgroundColor: ["rgba(255,99,132,0.5)", "rgba(54,162,235,0.5)"],
              borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Inversión y Beneficio Total",
            },
          },
        },
      });
    }
  }, [totalInversionBeneficio]);

  useEffect(() => {
    if (gananciaPorGenero.length > 0) {
      const ctx = document.getElementById("gananciaPorGenero");

      const labels = gananciaPorGenero.map(
        (item) => `${item.genero_producto} - ${item.mes}/${item.anio}`
      );
      const cantidadData = gananciaPorGenero.map(
        (item) => item.cantidad_compras
      );
      const gananciaData = gananciaPorGenero.map((item) => item.monto_ganancia);

      const existingChart = Chart.getChart("gananciaPorGenero");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Cantidad de Compras",
              data: cantidadData,
              backgroundColor: "rgba(153,102,255,0.5)",
              borderColor: "rgba(153,102,255,1)",
              borderWidth: 1,
            },
            {
              label: "Monto de Ganancia",
              data: gananciaData,
              backgroundColor: "rgba(75,192,192,0.5)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [gananciaPorGenero]);

  useEffect(() => {
    if (generoClienteCompras.length > 0) {
      const ctx = document.getElementById("generoClienteCompras");

      const labels = generoClienteCompras.map((item) => item.genero_cliente);
      const comprasData = generoClienteCompras.map(
        (item) => item.total_compras
      );
      const montoData = generoClienteCompras.map(
        (item) => item.monto_total_compras
      );

      const existingChart = Chart.getChart("generoClienteCompras");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Total Compras",
              data: comprasData,
              backgroundColor: "rgba(255,99,132,0.5)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
            },
            {
              label: "Monto Total Compras",
              data: montoData,
              backgroundColor: "rgba(54,162,235,0.5)",
              borderColor: "rgba(54,162,235,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [generoClienteCompras]);

  useEffect(() => {
    if (comprasFisicaOnline.length > 0) {
      const ctx = document.getElementById("comprasFisicaOnline");

      const labels = comprasFisicaOnline.map((item) => item.tipo_entrega);
      const cantidadData = comprasFisicaOnline.map(
        (item) => item.cantidad_comprada
      );
      const montoData = comprasFisicaOnline.map((item) => item.monto_total);

      const existingChart = Chart.getChart("comprasFisicaOnline");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Cantidad Comprada",
              data: cantidadData,
              backgroundColor: "rgba(255,206,86,0.5)",
              borderColor: "rgba(255,206,86,1)",
              borderWidth: 1,
            },
            {
              label: "Monto Total",
              data: montoData,
              backgroundColor: "rgba(75,192,192,0.5)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [comprasFisicaOnline]);

  const generarReporteProductosporCategoria = () => {
    fetch("http://localhost:5000/crud/ProductosPorCategoria")
      .then((response) => response.json())
      .then((cantidadproducto) => {
        console.log("Productos por Categoria:", cantidadproducto);

        const doc = new jsPDF();
        doc.text("Reporte Productos por Categoria", 20, 10);

        const headers = ["Categoria", "Cantidad de Producto"];
        const data = cantidadproducto.map((cantidadesproducto) => [
          cantidadesproducto.nombre_categoria,
          cantidadesproducto.CantidadProductos
        ]);

        try {
          doc.autoTable({
            startY: 20,
            head: [headers],
            body: data,
            theme: "striped",
            margin: { top: 15 },
          });

          doc.save("productosporcategoria.pdf");
          console.log("Documento PDF generado y descargado.");
        } catch (error) {
          console.error("Error al generar el PDF con autoTable:", error);
        }
      })
      .catch((error) => console.error("Error al obtener el stock:", error));
  };

  const handleDownloadPDF = (canvasId) => {
    const captureElement = document.getElementById(canvasId);

    if (captureElement) {
      html2canvas(captureElement, { scrollY: -window.scrollY }).then(
        (canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("Estadisticas.pdf");
        }
      );
    }
  };

  return (
    <>
      <Header rol={rol} />
      <Container style={{ backgroundColor: '#303030', minHeight: '100vh', paddingTop:'70px', marginTop:'0px' }} className="espaciado" fluid>
        <Row>
          <Col className="title">
            <h1 style={{ color: '#ffff'}} >Estadísticas de Productos</h1>
          </Col>
        </Row>

        <div >
          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Header>Productos por Categoría</Card.Header>
                <Card.Body>
                  <canvas id="myCategories" width="100%" height="100%"></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() => handleDownloadPDF("myCategories")}
                    >
                      Descargar Grafico
                    </Button>
                    <Button onClick={generarReporteProductosporCategoria}>
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Header>Top 5 Clientes</Card.Header>
                <Card.Body>
                  <canvas id="top5Clientes" width="100%" height="100%"></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() => handleDownloadPDF("top5Clientes")}
                    >
                      Descargar Grafico
                    </Button>
                    <Button
                      onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                    >
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Header>Inversión y Beneficio por Mes</Card.Header>
                <Card.Body>
                  <canvas
                    id="inversionYBeneficioMes"
                    width="100%"
                    height="100%"
                  ></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() =>
                        handleDownloadPDF("inversionYBeneficioMes")
                      }
                    >
                      Descargar Grafico
                    </Button>
                    <Button
                      onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                    >
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Header>Ganancias por Venta</Card.Header>
                <Card.Body>
                  <canvas
                    id="gananciasPorVenta"
                    width="100%"
                    height="100%"
                  ></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() => handleDownloadPDF("gananciasPorVenta")}
                    >
                      Descargar Grafico
                    </Button>
                    <Button
                      onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                    >
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Header>Inversión y Beneficio Total</Card.Header>
                <Card.Body>
                  <canvas
                    id="totalInversionBeneficio"
                    width="100%"
                    height="100%"
                  ></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() =>
                        handleDownloadPDF("totalInversionBeneficio")
                      }
                    >
                      Descargar Grafico
                    </Button>
                    <Button
                      onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                    >
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Header>Ganancia por Género</Card.Header>
                <Card.Body>
                  <canvas
                    id="gananciaPorGenero"
                    width="100%"
                    height="100%"
                  ></canvas>
                </Card.Body>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      className="botongraf"
                      onClick={() => handleDownloadPDF("gananciaPorGenero")}
                    >
                      Descargar Grafico
                    </Button>
                    <Button
                      onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                    >
                      Descargar Listado
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Header>Compras por Género de Cliente</Card.Header>
                <Card.Body>
                  <canvas
                    id="generoClienteCompras"
                    width="100%"
                    height="100%"
                  ></canvas>
                  <Row className="mt-4">
                    <Col className="text-center">
                      <Button
                        className="botongraf"
                        onClick={() =>
                          handleDownloadPDF("generoClienteCompras")
                        }
                      >
                        Descargar Grafico
                      </Button>
                      <Button
                        onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                      >
                        Descargar Listado
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Header>Compras Físicas vs. Online</Card.Header>
                <Card.Body>
                  <canvas
                    id="comprasFisicaOnline"
                    width="100%"
                    height="100%"
                  ></canvas>
                  <Row className="mt-4">
                    <Col className="text-center">
                      <Button
                        className="botongraf"
                        onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                      >
                        Descargar Grafico
                      </Button>
                      <Button
                        onClick={() => handleDownloadPDF("comprasFisicaOnline")}
                      >
                        Descargar Listado
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Estadisticas;
