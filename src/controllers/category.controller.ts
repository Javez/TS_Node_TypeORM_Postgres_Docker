import * as express from 'express';
import PostNotFoundException from '../exeptions/post/PostNotFound.exeption';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreatePostDto from '../dto/post.dto';
import Post from '../model/post.model';
import Database from '../config/orm.config';
import { Repository } from 'typeorm';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import authMiddleware from '../middleware/auth.middleware';
import Category from '../model/category.model';
import CategoryNotFoundException from '../exeptions/category/CategoryNotFound.exeption';

class CategoryController implements Controller {
    public path: string = '/categories';
    public router: express.Router = express.Router();
    private categoryRepository: Repository<Category> =
        Database.getInstance().getRepository(Category);

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllCategories);
        this.router.get(`${this.path}/:id`, this.getCategoryById);
    }

    private getAllCategories = async (
        request: express.Request,
        response: express.Response
    ) => {
        const categories = await this.categoryRepository.find({
            relations: ['posts'],
        });
        response.send(categories);
    };

    private getCategoryById = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const id = request.params.id;
        const category = await this.categoryRepository.findOne({
            where: { id: Number(id) },
            relations: ['posts'],
        });
        if (category) {
            response.send(category);
        } else {
            next(new CategoryNotFoundException(id));
        }
    };
}

export default CategoryController;
