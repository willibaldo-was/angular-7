CREATE TABLE IF NOT EXISTS productos (
	id_producto	INTEGER PRIMARY KEY AUTOINCREMENT,
	description	TEXT,
	price	INTEGER,
	logo	INTEGER,
	qty	INTEGER,
	total	INTEGER,
	hide	TEXT
);
CREATE TABLE IF NOT EXISTS tickets (
	id_ticket	INTEGER,
	id_producto	INTEGER,
	cant	INTEGER,
	importe	INTEGER,
	total	INTEGER,
	fecha	TEXT,
	hora	TEXT
);
CREATE TABLE IF NOT EXISTS ventas (
	id_venta	INTEGER,
	fecha	TEXT,
	z	INTEGER,
	g	INTEGER,
	h_inicio	TEXT,
	h_fin	TEXT,
	cant_ticket	INTEGER,
	id_1	INTEGER,
	id_2	INTEGER,
	id_3	INTEGER,
	id_4	INTEGER,
	id_5	INTEGER,
	id_6	INTEGER,
	id_7	INTEGER,
	id_8	INTEGER,
	id_9	INTEGER,
	id_10	INTEGER,
	id_11	INTEGER,
	id_12	INTEGER,
	id_13	INTEGER,
	id_14	INTEGER,
	id_15	INTEGER,
	id_16	INTEGER,
	id_17	INTEGER
);
CREATE TABLE IF NOT EXISTS gastos (
	id_gastos	INTEGER,
	id_salida	INTEGER,
	importe	INTEGER,
	fecha	TEXT
);
CREATE TABLE IF NOT EXISTS salidas (
	id_salida	INTEGER,
	Descripcion	TEXT
);
INSERT or IGNORE INTO productos VALUES (1,'Hdo Sencillo',16,1,1,16,'false');
INSERT or IGNORE INTO productos VALUES (2,'Hdo Doble',30,1,1,30,'false');
INSERT or IGNORE INTO productos VALUES (3,'Canasta',40,1,1,40,'false');
INSERT or IGNORE INTO productos VALUES (4,'Pta Fruta',17,1,1,17,'false');
INSERT or IGNORE INTO productos VALUES (5,'Pta Crema',20,1,1,20,'false');
INSERT or IGNORE INTO productos VALUES (6,'Nuez Entera',30,1,1,30,'false');
INSERT or IGNORE INTO productos VALUES (7,'Pta Cubierta',30,1,1,30,'false');
INSERT or IGNORE INTO productos VALUES (8,'Agua 0.5 lt',17,1,1,17,'false');
INSERT or IGNORE INTO productos VALUES (9,'Agua 1lt',30,1,1,30,'false');
INSERT or IGNORE INTO productos VALUES (10,'Fresas',40,1,1,40,'false');
INSERT or IGNORE INTO productos VALUES (11,'Litro de Helado',120,1,1,120,'false');
INSERT or IGNORE INTO productos VALUES (12,'Banana',55,1,1,55,'false');
INSERT or IGNORE INTO productos VALUES (13,'Ord. Gorditas',35,1,1,35,'false');
INSERT or IGNORE INTO productos VALUES (14,'Tamal solo',10,1,1,10,'false');
INSERT or IGNORE INTO productos VALUES (15,'Tamal c/ torta',12,1,1,12,'false');
INSERT or IGNORE INTO productos VALUES (16,'Atole',8,1,1,8,'false');
INSERT or IGNORE INTO productos VALUES (17,'Tamal Dulce',15,1,1,15,'false');
INSERT or IGNORE INTO tickets VALUES (1,1,5,16,80,'27/08/2020','13:00');
INSERT or IGNORE INTO tickets VALUES (2,2,8,30,240,'27/08/2020','13:10');
INSERT or IGNORE INTO tickets VALUES (3,3,6,40,240,'27/08/2020','14:20');
INSERT or IGNORE INTO tickets VALUES (4,4,7,17,119,'28/08/2020','13:50');
INSERT or IGNORE INTO tickets VALUES (5,5,5,20,100,'28/08/2020','15:30');
INSERT or IGNORE INTO tickets VALUES (6,6,6,30,180,'28/08/2020','17:39');
INSERT or IGNORE INTO ventas VALUES (1,'27/08/2020',560,825,'13:00','14:20',3,5,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
INSERT or IGNORE INTO ventas VALUES (2,'28/08/2020',399,847,'13:50','17:39',3,0,0,0,7,5,6,0,0,0,0,0,0,0,0,0,0,0);
INSERT or IGNORE INTO gastos VALUES (1,1,800,'27/08/2020');
INSERT or IGNORE INTO gastos VALUES (2,2,20,'27/08/2020');
INSERT or IGNORE INTO gastos VALUES (3,3,5,'27/08/2020');
INSERT or IGNORE INTO gastos VALUES (4,1,800,'28/08/2000');
INSERT or IGNORE INTO gastos VALUES (5,2,32,'28/08/2000');
INSERT or IGNORE INTO gastos VALUES (6,3,15,'28/08/2000');
INSERT or IGNORE INTO salidas VALUES (1,'Salario');
INSERT or IGNORE INTO salidas VALUES (2,'Jabon');
INSERT or IGNORE INTO salidas VALUES (3,'Agua');
INSERT or IGNORE INTO salidas VALUES (4,'Cloro');
INSERT or IGNORE INTO salidas VALUES (5,'Servilletas');
INSERT or IGNORE INTO salidas VALUES (6,'Chocolate');
