import {NextFunction, Request , Response} from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { AppError } from "../../error"

const ensureAuthMiddleware = (req:Request, res:Response, next:NextFunction) => {
    let token = req.headers.authorization

    if(!token){
        return res.status(403).json({message: 'Token invalid'})
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded:any) => {
        if(error){
            return res.status(403).json({
                message: error.message
            })
        }
        req.body = {
            ...req.body,
            user: {
                id: decoded.user.id
            }
        }
        return next()
    })
}
export {ensureAuthMiddleware};