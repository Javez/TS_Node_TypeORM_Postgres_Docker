import { NextFunction, Router } from 'express';
import CreateUserDTO from '../../dto/user/user.dto';
import validationMiddleware from '../../middleware/validation.middleware';
import Controller from '../../interfaces/controller.interface';
import AuthService from '../../service/auth/auth.service';

class AuthController implements Controller {
    public path = '/auth';
    public router = Router();
    public authService = new AuthService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {

    }

    private registration(req: Request, res: Response, next: NextFunction) {
      
    }
}

export default AuthController;
