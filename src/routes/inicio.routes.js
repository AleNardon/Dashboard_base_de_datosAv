import { Router } from "express";
import { validateToken } from "../middleware/validateToken.js";
import {getInicioInfo} from "../controllers/inicio.controller.js"

const router  = Router()



router.get("/",validateToken,getInicioInfo)


export default router