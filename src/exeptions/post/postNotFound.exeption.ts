import HttpException from '../http.exeption';

class PostNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `Post not found ${id}`);
    }
}

export default PostNotFoundException;