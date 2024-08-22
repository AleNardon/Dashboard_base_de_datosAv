-- Crear la base de datos y seleccionarla
-- CREATE DATABASE dashboardbd;
-- USE dashboardbd;

-- Crear la tabla users
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_level INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (username, email)
);

-- Crear la tabla alumnos
CREATE TABLE alumnos (
    alumno_id INT NOT NULL AUTO_INCREMENT,
    nombre_apellido VARCHAR(90) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    activo INT NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (alumno_id)
);

-- Crear la tabla planes
CREATE TABLE planes (
    plan_id INT NOT NULL AUTO_INCREMENT,
    cant_clases INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    aclaracion VARCHAR(200) NOT NULL,
    PRIMARY KEY (plan_id)
);

-- Crear la tabla alumnos_planes
CREATE TABLE alumnos_planes (
    alumno_plan_id INT NOT NULL AUTO_INCREMENT,
    alumno_id INT NOT NULL,
    plan_id INT NOT NULL,
    monto_plan DECIMAL(10, 2) NOT NULL,
    pago_acumulado DECIMAL(10, 2) NOT NULL,
    primer_clase DATE NOT NULL,
    ultima_clase DATE NOT NULL,
    aclaracion VARCHAR(200) NOT NULL,
    PRIMARY KEY (alumno_plan_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos(alumno_id),
    FOREIGN KEY (plan_id) REFERENCES planes(plan_id)
);

-- Crear la tabla formas_de_pago
CREATE TABLE formas_de_pago (
    forma_pago_id INT NOT NULL AUTO_INCREMENT,
    aclaracion VARCHAR(200) NOT NULL,
    PRIMARY KEY (forma_pago_id)
);

-- Crear la tabla pagos
CREATE TABLE pagos (
    pago_id INT NOT NULL AUTO_INCREMENT,
    alumno_id INT NOT NULL,
    fecha_pago DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    monto DECIMAL(10, 2) NOT NULL,
    forma_pago_id INT NOT NULL,
    alumno_plan_id INT NOT NULL,
    plan_id INT NOT NULL,
    aclaracion VARCHAR(200) NOT NULL,
    PRIMARY KEY (pago_id),
    FOREIGN KEY (alumno_id) REFERENCES alumnos(alumno_id),
    FOREIGN KEY (alumno_plan_id) REFERENCES alumnos_planes(alumno_plan_id),
    FOREIGN KEY (plan_id) REFERENCES planes(plan_id),
    FOREIGN KEY (forma_pago_id) REFERENCES formas_de_pago(forma_pago_id)
);



-- Insertar datos en la tabla users
#insert testing de la tabla alumnos
INSERT INTO `alumnos` (`alumno_id`,`nombre_apellido`, `telefono`, `activo`) values
(1,'Leandro Romagnoli' , '3411231231' , 1 )
,(2,'Ignacio Piatti' , '3411231232' , 1 )
,(3,'Bernardo Romeo' , '3411231233' , 1 )
,(4,'Ezequiel Lavezzi' , '3411231234' , 1 )
,(5,'Néstor Gorosito' , '3411231235' , 1 )
,(6,'José Sanfilippo' , '3411231236' , 1 )
,(7,'Pablo Zabaleta' , '3411231237' , 1 )
,(8,'Juan Antonio Pizzi' , '3411231238' , 1 )
,(9,'Leandro Díaz' , '3411231239' , 1 )
,(10,'Fabricio Coloccini' , '3411231240' , 1 )
,(11,'Ariel Montenegro' , '3411231241' , 1 )
,(12,'Claudio Biaggio' , '3411231242' , 1 )
,(13,'Alfredo Berti' , '3411231243' , 0 )
,(14,'Rubén Ayala' , '3411231244' , 0 )
,(15,'Fernando Redondo' , '3411231245' , 0 )
,(16,'Rodolfo Fischer' , '3411231246' , 0 )
,(17,'Alberto Acosta' , '3411231247' , 0 )
,(18,'Gonzalo Bergessio' , '3411231248' , 0 )
,(19,'Omar Larrosa' , '3411231249' , 0 )
,(20,'Américo Gallego' , '3411231250' , 0 )
,(21,'Enrique García' , '3411231251' , 0 )
,(22,'René Houseman' , '3411231252' , 0 )
,(23,'Andrés DAlessandro' , '3411231253' , 0 )
,(24,'María González' , '3411231254' , 1 )
,(25,'Laura Martínez' , '3411231255' , 1 )
,(26,'Ana Rodríguez' , '3411231256' , 1 )
,(27,'Patricia Pérez' , '3411231257' , 1 )
,(28,'Carolina López' , '3411231258' , 1 )
,(29,'Martina Fernández' , '3411231259' , 1 )
,(30,'Silvia Torres' , '3411231260' , 1 )
,(31,'Adriana Silva' , '3411231261' , 1 )
,(32,'Elena Ramírez' , '3411231262' , 1 )
,(33,'Andrea Castro' , '3411231263' , 1 )
,(34,'Julia Mendoza' , '3411231264' , 1 )
,(35,'Beatriz Vargas' , '3411231265' , 1 )
,(36,'Isabel Sánchez' , '3411231266' , 1 )
,(37,'Gabriela Peralta' , '3411231267' , 1 )
,(38,'Graciela Jiménez' , '3411231268' , 1 )
,(39,'Clara Díaz' , '3411231269' , 0 )
,(40,'Mariana Ruiz' , '3411231270' , 0 )
,(41,'Lourdes Herrera' , '3411231271' , 0 )
,(42,'Verónica Cruz' , '3411231272' , 0 )
,(43,'Alejandra Ortega' , '3411231273' , 0 )
,(44,'Paula Reyes' , '3411231274' , 0 )
,(45,'Sofía Morales' , '3411231275' , 0 )
,(46,'Fernanda Acosta' , '3411231276' , 0 )
,(47,'Florencia Ríos' , '3411231277' , 0 )
,(48,'Estela Gómez' , '3411231278' , 0 );

INSERT INTO `planes` ( `cant_clases`, `precio`, `aclaracion`) VALUES 
('1', '5400', '1 clase sola'),
('4', '18100', '4 clases en 4 semanas'),
('8', '32500', '8 clases en 4 semanas');


INSERT INTO `formas_de_pago` ( `aclaracion`) VALUES 
( 'efectivo'),( 'tranferencia'),( 'tarjeta de credito'),( 'tarjeta de debito');

INSERT INTO `users` ( `email`, `username`, `password`, `user_level`, `created_at`) VALUES ('test@test.com', 'user', '$2b$10$eXA5eRKVXuRHvwzHQoAMKeokFRLgdieQSUg6zJ7gKOCPwgiFIXo7q', '1', current_timestamp());




INSERT INTO `alumnos_planes` ( `alumno_plan_id`,`alumno_id`, `plan_id`, `monto_plan`, `pago_acumulado`, `primer_clase`, `ultima_clase`) VALUES
(1, 1, 1, 5400, 5400, '2024-07-30','2024-08-20'),
(2, 2, 1, 5400, 5400, '2024-07-29','2024-08-19'),
(3, 3, 1, 5400, 5400, '2024-07-28','2024-08-18'),
(4, 4, 1, 5400, 5400, '2024-07-27','2024-08-17'),
(5, 5, 1, 5400, 5400, '2024-07-26','2024-08-16'),
(6, 6, 1, 5400, 3000, '2024-07-25','2024-08-15'),
(7, 7, 1, 5400, 200, '2024-07-24','2024-08-14'),
(8, 8, 1, 5400, 0, '2024-07-23','2024-08-13'),
(9, 9, 2, 18100, 18100, '2024-07-22','2024-08-12'),
(10, 10, 2, 18100, 18100, '2024-07-21','2024-08-11'),
(11, 11, 2, 18100, 18100, '2024-07-20','2024-08-10'),
(12, 12, 2, 18100, 18100, '2024-07-19','2024-08-09'),
(13, 20, 2, 18100, 18100, '2024-07-18','2024-08-08'),
(14, 21, 2, 18100, 18100, '2024-07-17','2024-08-07'),
(15, 22, 2, 18100, 18100, '2024-07-16','2024-08-06'),
(16, 23, 2, 18100, 18100, '2024-07-15','2024-08-05'),
(17, 24, 2, 18100, 10000, '2024-07-14','2024-08-04'),
(18, 25, 2, 18100, 10000, '2024-07-13','2024-08-03'),
(19, 26, 2, 18100, 5000, '2024-07-12','2024-08-02'),
(20, 27, 2, 18100, 3000, '2024-07-11','2024-08-01'),
(21, 28, 2, 18100, 0, '2024-07-10','2024-07-31'),
(22, 29, 2, 18100, 0, '2024-07-09','2024-07-30'),
(23, 30, 3, 32500, 32500, '2024-07-08','2024-07-29'),
(24, 31, 3, 32500, 32500, '2024-07-07','2024-07-28'),
(25, 32, 3, 32500, 32500, '2024-07-06','2024-07-27'),
(26, 33, 3, 32500, 32500, '2024-07-05','2024-07-26'),
(27, 34, 3, 32500, 32500, '2024-07-04','2024-07-25'),
(28, 35, 3, 32500, 32500, '2024-07-03','2024-07-24'),
(29, 36, 3, 32500, 32500, '2024-07-02','2024-07-23'),
(30, 37, 3, 32500, 15000, '2024-07-01','2024-07-22'),
(31, 38, 3, 32500, 15000, '2024-06-30','2024-07-21'),
(32, 39, 3, 32500, 15000, '2024-06-29','2024-07-20'),
(33, 40, 3, 32500, 2500, '2024-06-28','2024-07-19'),
(34, 41, 3, 32500, 0, '2024-06-27','2024-07-18'),
(35, 42, 3, 32500, 0, '2024-06-26','2024-07-17'),
(36, 9, 2, 18100, 18100, '2024-08-19','2024-09-09'),
(37, 10, 2, 18100, 18100, '2024-08-18','2024-09-08'),
(38, 11, 2, 18100, 18100, '2024-08-17','2024-09-07'),
(39, 12, 2, 18100, 18100, '2024-08-16','2024-09-06'),
(40, 38, 3, 32500, 15000, '2024-07-07','2024-07-28'),
(41, 39, 3, 32500, 15000, '2024-07-06','2024-07-27'),
(42, 40, 3, 32500, 2500, '2024-07-05','2024-07-26'),
(43, 41, 3, 32500, 0, '2024-07-04','2024-07-25'),
(44, 42, 3, 32500, 0, '2024-07-03','2024-07-24');


#pagos respectivo a los planes de este mes
INSERT INTO `pagos` ( `alumno_id`, `fecha_pago`, `monto`, `forma_pago_id`, `alumno_plan_id`, `plan_id`) VALUES 
(1, '2024-07-30', 5400, 1, 1, 1),
(2, '2024-07-29', 5400, 2, 2, 1),
(3, '2024-07-28', 5400, 3, 3, 1),
(4, '2024-07-27', 2400, 4, 4, 1),
(5, '2024-07-26', 5400, 1, 5, 1),
(6, '2024-07-25', 3000, 2, 6, 1),
(7, '2024-07-24', 200, 3, 7, 1),
(4, '2024-07-27', 2400, 4, 4, 1),
(9, '2024-07-22', 10000, 1, 9, 2),
(10, '2024-07-21', 10000, 2, 10, 2),
(11, '2024-07-20', 18100, 3, 11, 2),
(12, '2024-07-19', 18100, 4, 12, 2),
(20, '2024-07-18', 18100, 1, 13, 2),
(21, '2024-07-17', 18100, 2, 14, 2),
(22, '2024-07-16', 18100, 3, 15, 2),
(23, '2024-07-15', 18100, 4, 16, 2),
(24, '2024-07-14', 10000, 1, 17, 2),
(25, '2024-07-13', 10000, 2, 18, 2),
(26, '2024-07-12', 5000, 3, 19, 2),
(27, '2024-07-11', 3000, 4, 20, 2),
(9, '2024-07-22', 8100, 1, 9, 2),
(10, '2024-07-21', 8100, 2, 10, 2),
(30, '2024-07-08', 32500, 3, 23, 3),
(31, '2024-07-07', 32500, 4, 24, 3),
(32, '2024-07-06', 32500, 1, 25, 3),
(33, '2024-07-05', 32500, 2, 26, 3),
(34, '2024-07-04', 32500, 3, 27, 3),
(35, '2024-07-03', 32500, 4, 28, 3),
(36, '2024-07-02', 17500, 1, 29, 3),
(37, '2024-07-01', 7500, 2, 30, 3),
(38, '2024-06-30', 15000, 3, 31, 3),
(39, '2024-06-29', 15000, 4, 32, 3),
(40, '2024-06-28', 2500, 1, 33, 3),
(36, '2024-07-02', 15000, 1, 29, 3),
(37, '2024-07-01', 7500, 2, 30, 3),
(9, '2024-08-19', 18100, 4, 36, 2),
(10, '2024-08-18', 18100, 1, 37, 2),
(11, '2024-08-17', 18100, 2, 38, 2),
(12, '2024-08-16', 18100, 3, 39, 2),
(38, '2024-07-07', 15000, 4, 40, 3),
(39, '2024-07-06', 15000, 1, 41, 3),
(40, '2024-07-05', 2500, 2, 42, 3);
