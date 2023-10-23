import express, { json } from "express";
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
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

export default app