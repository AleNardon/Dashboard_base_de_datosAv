
import { pool } from "../db.js";


export const getPlans = async (req, res) => {
    try {
       
        const sqlquery = `SELECT alu.nombre_apellido, monto_plan, pago_acumulado, primer_clase, ultima_clase
                    FROM alumnos_planes as aluplan
                    inner join alumnos as alu on aluplan.alumno_id = alu.alumno_id`
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }

};

export const getPlansEnPeriodo = async (req, res) => {
    try {
        
        const sqlquery = `SELECT alu.nombre_apellido, monto_plan, pago_acumulado, primer_clase, ultima_clase
                        FROM alumnos_planes as aluplan
                        inner join alumnos as alu on aluplan.alumno_id = alu.alumno_id
                        Where primer_clase <= CURDATE()  and ultima_clase >= CURDATE()`
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getPlansFueraDePeriodo = async (req, res) => {
    try {
        
        const sqlquery = `SELECT alu.nombre_apellido, monto_plan, pago_acumulado, primer_clase, ultima_clase
                            FROM alumnos_planes as aluplan
                            inner join alumnos as alu on aluplan.alumno_id = alu.alumno_id
                            Where !(primer_clase <= CURDATE()  and ultima_clase >= CURDATE())`
        const [rows] = await pool.query(sqlquery);
        res.json(rows);
    } catch (error) {
        res.status(400).json(error);
    }
};

