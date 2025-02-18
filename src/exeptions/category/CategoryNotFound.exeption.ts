import HttpException from '../http.exeption';

class CategoryNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, 'Post not found');
    }
}

export default CategoryNotFoundException;
