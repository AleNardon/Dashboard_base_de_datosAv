import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// export const getLogin = (req, res) => {
//     let h1 = "<h1>LOGIN</h1>";
//     res.send(h1);
// };

export const profile = async (req, res) => {
    const { email, username } = req.body;
    const [row] = await pool.query("SELECT * FROM users where email=? and username=? ", [email,username]);
    if(row.length <= 0) return res.status(400).json({error:"User not found"});
    res.json({
        email:row[0].email,
        username:row[0].username,
        user_level:row[0].user_level
    });
};

export const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const passHash = await bcrypt.hash(password, 10);
        const user_level = 1;

        // faltan validaciones!!! ver si el usuario ya existe

        const row = await pool.query(
            "insert into users (email,username,password,user_level) values (?,?,?,?)",
            [email, username, passHash, user_level]
        );
        const token = await createAccessToken({ email, username, user_level });
        res.cookie("token", token);
        res.json({ email, username });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "User and Password required" });
    }
    try {
        const [row] = await pool.query("SELECT * FROM users where email=? ", [
            email,
        ]);

        // si el email no se encuentra
        if (row.length <= 0 || !(await bcrypt.compare(password, row[0].password))){
            return res.status(400).json({
                error: "Username or password incorrect",
            });
        }
        
        const payload = {id:row[0].id,email:row[0].email,username:row[0].username,user_level:row[0].user_level,};
        const token = await createAccessToken({...payload});
        res.cookie("token", token);
        res.json(payload);
       
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "logout" });
}

// validamos el token que tiene desde el frontend
export const verifyToken = async (req, res) => { 
    const {token} = req.cookies  ;

    if(!token) return res.status(401).json({error:"Unauthorized"});
    
    //verificamos puede ser un error o el usuario decodificado en el token 
    jwt.verify(token,TOKEN_SECRET, async (err,user)=>{
        if(err) return res.status(401).json({error:"Unauthorized"});
        
        const userFound = await pool.query("SELECT * FROM users where id=? ", [user.id]);

        if (!userFound) return res.status(401).json({error:"Unauthorized"});
        return res.json({user:userFound[0]});
    } );
}