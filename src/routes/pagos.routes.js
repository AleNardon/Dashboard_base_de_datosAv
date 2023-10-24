import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import { getPagos, getPagosDH, getPagosDelMes } from "../controllers/pagos.controller.js";

const router  = Router()



router.get("/",validateToken,getPagos)
router.get("/mes",validateToken,getPagosDelMes)
router.get("/:desde/:hasta",validateToken,getPagosDH)



export default router