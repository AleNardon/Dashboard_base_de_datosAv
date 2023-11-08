import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import { getAlumnos,getAlumnoxId } from "../controllers/alumnos.controller.js";

const router  = Router()



router.get("/",validateToken,getAlumnos)
router.get("/:id",validateToken,getAlumnoxId)


export default router