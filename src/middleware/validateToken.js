import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const validateToken = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message: "No token provided"});

    jwt.verify(token, TOKEN_SECRET, (err, decodedToken) => {
        if(err) return res.status(401).json({message: "Unauthorized"});

        req.userId = decodedToken.id;
        next();
    })
}


export const validateTokenLevel = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message: "No token provided"});

    jwt.verify(token, TOKEN_SECRET, (err, decodedToken) => {
        if(err) return res.status(401).json({message: "Unauthorized"});
        if(decodedToken.user_level !== 1) return res.status(401).json({message: "Unauthorized"});
        req.userId = decodedToken.id;
        next();
    })
}

