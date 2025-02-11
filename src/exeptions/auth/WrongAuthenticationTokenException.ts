import HttpException from '../http.exeption';

class WrongAuthenticationTokenException extends HttpException {
    constructor() {
        super(401, 'Wrong authentication token');
    }
}

export default WrongAuthenticationTokenException;
