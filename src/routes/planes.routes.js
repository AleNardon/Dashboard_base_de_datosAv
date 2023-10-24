import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import { getPlans, getPlansEnPeriodo, getPlansFueraDePeriodo } from "../controllers/planes.controller.js";
const router  = Router()



router.get("/",validateToken,getPlans)
router.get("/inperi",validateToken,getPlansEnPeriodo)
router.get("/outperi",validateToken,getPlansFueraDePeriodo)


export default router