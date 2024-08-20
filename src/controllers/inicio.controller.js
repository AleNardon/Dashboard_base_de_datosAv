import { pool } from "../db.js";

export const getInicioInfo = async (req, res) => {
  try {
    let data = {};
    let sqlquery = `SELECT COUNT(DISTINCT pa.alumno_id) AS aluPlan, (SELECT COUNT(a.alumno_id) FROM alumnos a) AS aluTot FROM alumnos_planes pa WHERE pa.plan_id IN (1, 2, 3) AND pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE();`;
    const [row] = await pool.query(sqlquery);
    data.aluConPlan = row[0];

    sqlquery = `SELECT COUNT(DISTINCT pa.alumno_id) AS aluPlan, COUNT(DISTINCT CASE WHEN (pa.monto_plan - pa.pago_acumulado) = 0 THEN pa.alumno_id END) AS aluConSaldoCero FROM alumnos_planes pa WHERE pa.plan_id IN (1, 2, 3) AND pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE();`;
    const [row1] = await pool.query(sqlquery);
    data.cobConPlan = row1[0];

    sqlquery = `SELECT 
                COUNT(DISTINCT alumno_id) as totAluConDeuda,
                COUNT(DISTINCT CASE WHEN (
                    (pa.monto_plan - pa.pago_acumulado) = 0 AND
                    (pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE()) AND
                    NOT EXISTS (
                        SELECT 1
                        FROM alumnos_planes pa2
                        WHERE pa2.alumno_id = pa.alumno_id
                            AND (pa2.monto_plan - pa2.pago_acumulado) != 0
                            AND pa2.ultima_clase < CURDATE()
                )) THEN pa.alumno_id END) AS totAluSinDeuda
              FROM alumnos_planes as pa WHERE 
                        ((pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE())
                        OR (pa.monto_plan - pa.pago_acumulado) != 0) and plan_id=2;`;
    const [row2] = await pool.query(sqlquery);
    data.cobConPlan4 = row2[0];

    sqlquery = `SELECT 
        COUNT(DISTINCT alumno_id) as totAluConDeuda,
        COUNT(DISTINCT CASE WHEN (
            (pa.monto_plan - pa.pago_acumulado) = 0 AND
            (pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE()) AND
            NOT EXISTS (
                SELECT 1
                FROM alumnos_planes pa2
                WHERE pa2.alumno_id = pa.alumno_id
                    AND (pa2.monto_plan - pa2.pago_acumulado) != 0
                    AND pa2.ultima_clase < CURDATE()
        )) THEN pa.alumno_id END) AS totAluSinDeuda
      FROM alumnos_planes as pa WHERE 
                ((pa.primer_clase <= CURDATE() AND pa.ultima_clase >= CURDATE())
                OR (pa.monto_plan - pa.pago_acumulado) != 0) and plan_id=3;`;
    const [row3] = await pool.query(sqlquery);
    data.cobConPlan8 = row3[0];

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// SELECT * FROM alumnos_planes as pa WHERE
//         (
//             (pa.primer_clase <= '2023-10-15' AND pa.ultima_clase >= '2023-10-15')
//         OR (pa.monto_plan - pa.pago_acumulado) != 0)
//         and plan_id=2
