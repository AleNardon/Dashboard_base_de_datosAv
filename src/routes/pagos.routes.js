import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import { getPagos,getPagosAlumnos, getPagosDH, getPagosDelMes } from "../controllers/pagos.controller.js";

const router  = Router()



router.get("/",validateToken,getPagos)
router.get("/alumno/:a",validateToken,getPagosAlumnos)
router.get("/mes",validateToken,getPagosDelMes)
router.get("/:desde/:hasta",validateToken,getPagosDH)



export default router