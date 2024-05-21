USE DataMart;

-- Total de ventas por mes
SELECT 
    t.anio, 
    t.mes, 
    COUNT(h.id_hventa) AS total_ventas, 
    SUM(h.total_venta) AS total_precio_ventas
FROM 
    hechos_ventas h
JOIN 
    dim_tiempo t ON h.id_tiempo = t.id_tiempo
GROUP BY 
    t.anio, t.mes
ORDER BY 
    t.anio, t.mes;

-- Ventas por categoria de producto
SELECT 
    p.nombre_categoria, SUM(h.total_venta) AS total_ventas
FROM 
    hechos_ventas h
JOIN 
    dim_producto p ON h.id_producto = p.id_producto
GROUP BY 
    p.nombre_categoria
ORDER BY 
    total_ventas DESC;

-- Producto mas vendidos
SELECT 
    p.nombre_producto, SUM(h.cantidad_compra) AS total_cantidad
FROM 
    hechos_ventas h
JOIN 
    dim_producto p ON h.id_producto = p.id_producto
GROUP BY 
    p.nombre_producto
ORDER BY 
    total_cantidad DESC
LIMIT 10;

-- Total de ventas por cliente
SELECT 
    c.nombre1_cliente, c.apellido1_cliente, SUM(h.total_venta) AS total_ventas
FROM 
    hechos_ventas h
JOIN 
    dim_cliente c ON h.id_cliente = c.id_cliente
GROUP BY 
    c.id_cliente
ORDER BY 
    total_ventas DESC;

-- Ventas por genero de cliente
SELECT 
    c.genero, SUM(h.total_venta) AS total_ventas
FROM 
    hechos_ventas h
JOIN 
    dim_cliente c ON h.id_cliente = c.id_cliente
GROUP BY 
    c.genero
ORDER BY 
    total_ventas DESC;

-- Ventas promedio por cliente
SELECT 
    c.nombre1_cliente, c.apellido1_cliente, AVG(h.total_venta) AS venta_promedio
FROM 
    hechos_ventas h
JOIN 
    dim_cliente c ON h.id_cliente = c.id_cliente
GROUP BY 
    c.id_cliente
ORDER BY 
    venta_promedio DESC;


-- Ventas por tipo de pago
SELECT 
    h.tipo_pago, SUM(h.total_venta) AS total_ventas
FROM 
    hechos_ventas h
GROUP BY 
    h.tipo_pago
ORDER BY 
    total_ventas DESC;

