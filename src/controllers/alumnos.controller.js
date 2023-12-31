import { pool } from "../db.js";


export const getAlumnos = async (req, res) => {

    try {
        const sqlquery = `SELECT a.alumno_id as id , a.nombre_apellido, a.telefono, a.activo, a.fecha_creacion,ap.primer_clase,ap.ultima_clase,
        (SELECT SUM(ap.monto_plan) - SUM(ap.pago_acumulado) from alumnos_planes as ap WHERE ap.alumno_id=a.alumno_id) as deuda
                                    FROM alumnos AS a 
                                    LEFT JOIN (
            SELECT ap.alumno_id,MAX(ap.primer_clase) AS primer_clase,MAX(ap.ultima_clase) AS ultima_clase
            FROM alumnos_planes ap GROUP BY ap.alumno_id
        ) ap ON a.alumno_id = ap.alumno_id  `
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }

   
};

export const getAlumnoxId = async (req, res) => {

    try {
        const sqlquery = `SELECT a.alumno_id as id , a.nombre_apellido from alumnos as a WHERE a.alumno_id = ${req.params.id}  `
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }

   
};

