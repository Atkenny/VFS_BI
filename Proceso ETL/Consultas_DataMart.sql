Use DataMart;

-- Top 5
	-- Producto mas vendidos al trimestre
		SELECT dp.nombre_producto, SUM(hv.cantidad_compra) AS total_vendido
		FROM hechos_ventas hv
		JOIN dim_producto dp ON hv.id_producto = dp.id_producto
		GROUP BY dp.nombre_producto
		ORDER BY total_vendido DESC
		LIMIT 5;
        
	-- Cliente que mas compras realizan al trimestre
		SELECT CONCAT(dc.nombre1_cliente, ' ', dc.apellido1_cliente) AS nombre_cliente, COUNT(hv.id_hventa) AS total_compras
		FROM hechos_ventas hv
		JOIN dim_cliente dc ON hv.id_cliente = dc.id_cliente
		GROUP BY nombre_cliente
		ORDER BY total_compras DESC
		LIMIT 5;
        
	-- 	Top 5 productos con monto de inversión y monto de beneficio al mes con cantidad de compra del producto
		SELECT dp.nombre_producto, dt.anio, dt.mes, 
		   SUM(dp.precio_compra * hv.cantidad_compra) AS monto_inversion,
		   SUM((hv.precio_unitario - dp.precio_compra) * hv.cantidad_compra) AS monto_beneficio,
		   SUM(hv.cantidad_compra) AS cantidad_comprada
		FROM hechos_ventas hv
		JOIN dim_producto dp ON hv.id_producto = dp.id_producto
		JOIN dim_tiempo dt ON hv.id_tiempo = dt.id_tiempo
		WHERE dt.anio = YEAR(CURDATE())
		GROUP BY dp.nombre_producto, dt.anio, dt.mes
		ORDER BY monto_beneficio DESC
		LIMIT 5;


-- Total ganancias en monto por ventas y cantidad de ventas al mes
	SELECT dt.anio, dt.mes, 
		   SUM(hv.total_venta) AS total_ganancias, 
		   SUM(hv.cantidad_compra) AS total_cantidad_ventas
	FROM hechos_ventas hv
	JOIN dim_tiempo dt ON hv.id_tiempo = dt.id_tiempo
	WHERE dt.anio = YEAR(CURDATE())
	GROUP BY dt.anio, dt.mes
	ORDER BY dt.anio, dt.mes;

    
-- Total de inversión y total beneficio de todos los productos
	SELECT SUM(dp.precio_compra * dp.cantidad) AS total_inversion,
	SUM((dp.precio_venta - dp.precio_compra) * dp.cantidad) AS total_beneficio
	FROM dim_producto dp;

-- Cantidad de compras y el monto de ganancia por género de producto
	SELECT dt.anio, dt.mes, dp.genero_producto,
		   SUM(hv.cantidad_compra) AS cantidad_compras,
		   SUM((hv.precio_unitario - dp.precio_compra) * hv.cantidad_compra) AS monto_ganancia
	FROM hechos_ventas hv
	JOIN dim_producto dp ON hv.id_producto = dp.id_producto
	JOIN dim_tiempo dt ON hv.id_tiempo = dt.id_tiempo
	WHERE dt.anio = YEAR(CURDATE())
	GROUP BY dt.anio, dt.mes, dp.genero_producto
	ORDER BY dt.anio, dt.mes, dp.genero_producto;
    
-- Productos mas comprados por genero de cliente
	SELECT dc.genero AS genero_cliente, 
		   SUM(hv.cantidad_compra) AS total_compras,
		   SUM(hv.total_venta) AS monto_total_compras
	FROM hechos_ventas hv
	JOIN dim_cliente dc ON hv.id_cliente = dc.id_cliente
	WHERE dc.genero IN ('femenino', 'masculino') -- Filtrar por géneros femenino y masculino
	GROUP BY dc.genero
	ORDER BY dc.genero;


-- Tienda fisica y en linea
SELECT 
    CASE 
        WHEN tipo_pago IN ('Efectivo') THEN 'Tienda física'
        WHEN tipo_pago IN ('Transferencia bancaria', 'Tarjeta de crédito') THEN 'En línea'
        ELSE 'Otro'
    END AS tipo_entrega,
    SUM(cantidad_compra) AS cantidad_comprada,
    SUM(total_venta) AS monto_total
FROM 
    hechos_ventas
WHERE 
    tipo_pago IN ('Efectivo', 'Transferencia bancaria', 'Tarjeta de crédito')
GROUP BY 
    CASE 
        WHEN tipo_pago IN ('Efectivo, Transferencia bancaria') THEN 'Tienda física'
        WHEN tipo_pago IN ('Tarjeta de crédito') THEN 'En línea'
        ELSE 'Otro'
    END;









