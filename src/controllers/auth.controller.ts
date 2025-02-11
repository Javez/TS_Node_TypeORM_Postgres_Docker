import * as express from 'express';
import CreateUserDTO from '../dto/user.dto';
import validationMiddleware from '../middleware/validation.middleware';
import Controller from '../interfaces/controller.interface';
import AuthService from '../service/auth/auth.service';
import LogInDto from '../dto/login.dto';

class AuthController implements Controller {
    public path = '/auth';
    public router = express.Router();
    public authService = new AuthService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(
            `${this.path}/register`,
            validationMiddleware(CreateUserDTO),
            this.registration
        );
        this.router.post(
            `${this.path}/login`,
            validationMiddleware(LogInDto),
            this.loggingIn
        );
        this.router.post(`${this.path}/logout`, this.loggingOut);
    }

    private registration = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const userData: CreateUserDTO = request.body;
        try {
            const { cookie, user } = await this.authService.register(userData);
            response.setHeader('Set-Cookie', [cookie]);
            response.send(user);
        } catch (error) {
            next(error);
        }
    };

    private loggingIn = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const logInData: LogInDto = request.body;
        try {
            const { cookie, user } = await this.authService.loginIn(logInData);
            response.setHeader('Set-Cookie', [cookie]);
            response.send(user);
        } catch (error) {
            next(error);
        }
    };

    private loggingOut = (
        request: express.Request,
        response: express.Response
    ) => {
        response.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
        response.send(200);
    };
}

export default AuthController;
