import express, { json } from "express";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import planesRoutes from "./routes/planes.routes.js"
import alumnosRoutes from "./routes/alumnos.routes.js"
import pagosRoutes from "./routes/pagos.routes.js"
import inicioRoutes from "./routes/inicio.routes.js"
// import { PORT } from "./config.js";


const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.use('/api',authRoutes)
app.use('/api/planes',planesRoutes)
app.use('/api/alumnos',alumnosRoutes)
app.use('/api/pagos',pagosRoutes)
app.use('/api/inicio',inicioRoutes)

export default app