import HttpException from "../http.exeption";

class WrongCredentialsException extends HttpException {
    constructor() {
        super(401, 'Wrong credentials provided');
    }
}

export default WrongCredentialsException;
