// import express, { json } from "express";
// import authRoutes from "./routes/auth.routes.js"
// import morgan from "morgan"
import { PORT } from "./config.js";
import app from "./app.js"



app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${PORT}` )
} )