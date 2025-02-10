import * as express from 'express';
import CreateUserDTO from '../dto/user.dto';
import validationMiddleware from '../middleware/validation.middleware';
import Controller from '../interfaces/controller.interface';
import AuthService from '../service/auth/auth.service';

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
}

export default AuthController;
