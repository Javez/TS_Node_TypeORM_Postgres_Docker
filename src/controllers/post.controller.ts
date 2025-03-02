import * as express from 'express';
import PostNotFoundException from '../exeptions/post/PostNotFound.exeption';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreatePostDto from '../dto/post.dto';
import Post from '../model/post.model';
import datasource from '../config/orm.config';
import { Repository } from 'typeorm';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import authMiddleware from '../middleware/auth.middleware';

class PostController implements Controller {
    public path: string = '/posts';
    public router: express.Router = express.Router();
    private postRepository: Repository<Post> = datasource.getRepository(Post);

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getPostById);
        this.router
            .all(`${this.path}/*`, authMiddleware)
            .post(
                `${this.path}/create`,
                validationMiddleware(CreatePostDto),
                this.createPost
            )
            .patch(
                `${this.path}/:id`,
                validationMiddleware(CreatePostDto, true),
                this.modifyPost
            )
            .delete(`${this.path}/:id`, this.deletePost);
    }

    private createPost = async (
        request: RequestWithUser,
        response: express.Response
    ) => {
        const postData: CreatePostDto = request.body;
        const newPost = this.postRepository.create({
            ...postData,
            author: request.user,
        });
        await this.postRepository.save(newPost);
        newPost.author = undefined;
        response.send(newPost);
    };

    private getAllPosts = async (
        request: express.Request,
        response: express.Response,
    ) => {
        const posts = await this.postRepository.find({
            relations: ['categories'],
        });
        response.send(posts);
    };

    private getPostById = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const id = request.params.id;
        const post = await this.postRepository.findOne({
            where: { id: Number(id) },
            relations: ['categories'],
        });
        if (post) {
            response.send(post);
        } else {
            next(new PostNotFoundException(id));
        }
    };

    private modifyPost = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const id = request.params.id;
        const postData: Post = request.body;
        await this.postRepository.update(id, postData);
        const updatedPost = await this.postRepository.findOne({
            where: { id: Number(id) },
        });
        if (updatedPost) {
            response.send(updatedPost);
        } else {
            next(new PostNotFoundException(id));
        }
    };

    private deletePost = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        const id = request.params.id;
        const deleteResponse = await this.postRepository.delete(id);
        if (deleteResponse.raw[1]) {
            response.sendStatus(200);
        } else {
            next(new PostNotFoundException(id));
        }
    };
}

export default PostController;
