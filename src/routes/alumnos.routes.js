import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import { getAlumnos } from "../controllers/alumnos.controller.js";

const router  = Router()



router.get("/",validateToken,getAlumnos)


export default router