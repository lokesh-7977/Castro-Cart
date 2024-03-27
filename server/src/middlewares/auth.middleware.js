import User from '../models/user.schema.js';
import JWT from 'jsonwebtoken';
import handler from '../services/handler.js';
import config from '../config/index.js';
import CustomError from '../services/customError.js';


export const isLoggedIn = (handler(async (req, res, next) => {
    let token;

    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))){
        token = req.cookies.token || req.headers.authorization.split(' ')[1];
    }

    if(!token){
        throw new CustomError('No Access to this resource', 401);
    }

    try {
       const decodedPayload =  JWT.verify(token, config.JWT_SECRET);
       req.user = await User.findById(decodedPayload._id,"name email role");
       next();

    } catch (error) {
        throw new CustomError('No Access to this resource', 401);
    }
    next();


}));



export const authorize = (...requiredRoles)=> handler(async (req,res,next) => {
    if(!requiredRoles.includes(req.user.role)){
        throw new CustomError('You are not authorized to access', 403);
    }
});