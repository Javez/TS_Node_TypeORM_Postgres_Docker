import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import AuthenticationTokenMissingException from '../exeptions/auth/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exeptions/auth/WrongAuthenticationTokenException';
import DataStoredInToken from '../interfaces/dataStoredInToken.interface';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import User from '../model/user.model';
import datasource from '../config/orm.config';

async function authMiddleware(
    request: RequestWithUser,
    response: Response,
    next: NextFunction
) {
    const cookies = request.cookies;
    const userRepository = datasource.getRepository(User);
    if (cookies && cookies.Authorization) {
        const secret = process.env.JWT_SECRET;
        try {
            const verificationResponse = jwt.verify(
                cookies.Authorization,
                secret
            ) as DataStoredInToken;
            const id = verificationResponse.id;
            const user = await userRepository.findOne({ where: { id: id } });
            if (user) {
                request.user = user;
                next();
            } else {
                next(new WrongAuthenticationTokenException());
            }
        } catch (error) {
            next(new Error(error.message));
        }
    } else {
        next(new AuthenticationTokenMissingException());
    }
}

export default authMiddleware;
