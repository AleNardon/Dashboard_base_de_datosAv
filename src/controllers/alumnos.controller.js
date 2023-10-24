import { pool } from "../db.js";


export const getAlumnos = async (req, res) => {

    try {
        const sqlquery = `SELECT a.alumno_id, a.nombre_apellido, a.telefono, a.activo, a.fecha_creacion, ap.primer_clase, ap.ultima_clase,(SELECT SUM(ap.monto_plan) - SUM(ap.pago_acumulado) from alumnos_planes as ap WHERE ap.alumno_id=a.alumno_id) as deuda
                            FROM alumnos AS a inner join alumnos_planes as ap on ap.alumno_id = a.alumno_id`
        const rows = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }

   
};

