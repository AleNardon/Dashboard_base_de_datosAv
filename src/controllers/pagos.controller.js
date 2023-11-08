
import { pool } from "../db.js";


export const getPagos = async (req, res) => {
    try {
        const sqlquery = `SELECT pago_id as id, fecha_pago,monto,fo.aclaracion as forma_pago,a.alumno_id,a.nombre_apellido,pla.cant_clases
                        from pagos as pa INNER join planes as pla on pa.plan_id = pla.plan_id 
                        INNER join alumnos as a on pa.alumno_id = a.alumno_id
                        INNER join formas_de_pago as fo on pa.forma_pago_id = fo.forma_pago_id`
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};
export const getPagosAlumnos = async (req, res) => {
    try {
        const sqlquery = `SELECT pago_id as id, fecha_pago,monto,fo.aclaracion as forma_pago,a.alumno_id,a.nombre_apellido,pla.cant_clases
                        from pagos as pa INNER join planes as pla on pa.plan_id = pla.plan_id 
                        INNER join alumnos as a on pa.alumno_id = a.alumno_id
                        INNER join formas_de_pago as fo on pa.forma_pago_id = fo.forma_pago_id
                        WHERE a.alumno_id = '${req.params.a}'`
        
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};
export const getPagosDelMes = async (req, res) => {
    try {
        const sqlquery = `SELECT pago_id  as id, fecha_pago,monto,fo.aclaracion as forma_pago,a.alumno_id,a.nombre_apellido,pla.cant_clases
                        from pagos as pa INNER join planes as pla on pa.plan_id = pla.plan_id
                        INNER join alumnos as a on pa.alumno_id = a.alumno_id
                        INNER join formas_de_pago as fo on pa.forma_pago_id = fo.forma_pago_id
                        where MONTH(fecha_pago) = MONTH(curdate()) AND YEAR(fecha_pago) = YEAR(curdate())`
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getPagosDH = async (req, res) => {
    try {
        const desde = req.params.desde;
        const hasta = req.params.hasta;

        const sqlquery = `SELECT pagos_id  as id, fecha_pago,monto,fo.aclaracion as forma_pago,a.alumno_id,
        a.nombre_apellido,pla.cant_clases from pagos as pa
        INNER join planes as pla on pa.plan_id = pla.plan_id
        INNER join alumnos as a on pa.alumno_id = a.alumno_id
        INNER join formas_de_pago as fo on pa.forma_pago_id = fo.forma_pago_id
        where fecha_pago >= '${desde}' AND fecha_pago <= '${hasta}'`

        console.log(sqlquery);
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};



