import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import User from '../../model/user.model';
import CreateUserDTO from '../../dto/user.dto';
import Database from '../../config/orm.config';
import UserWithThatEmailAlreadyExistsException from '../../exeptions/auth/UserWithThisEmailAlreadyExistsExeption';
import TokenData from '../../interfaces/tokenData.interface';
import DataStoredInToken from '../../interfaces/dataStoredInToken.interface';
import LogInDto from '../../dto/login.dto';
import WrongCredentialsException from '../../exeptions/auth/WrongCredentialsException';

class AuthService {
    private userRepository = Database.getInstance().getRepository(User);

    public async register(userData: CreateUserDTO) {
        if (
            await this.userRepository.findOne({
                where: { email: userData.email },
            })
        ) {
            throw new UserWithThatEmailAlreadyExistsException(userData.email);
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });
        await this.userRepository.save(user);
        user.password = undefined;
        const tokenData = this.createToken(user);
        const cookie = this.createCookie(tokenData);
        return {
            cookie,
            user,
        };
    }

    public async loginIn(logInData: LogInDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: logInData.email,
            },
        });
        if (user) {
            const isPasswordMatching = await bcrypt.compare(
                logInData.password,
                user.password
            );
            if (isPasswordMatching) {
                user.password = undefined;
                const tokenData = this.createToken(user);
                const cookie = this.createCookie(tokenData);
                return { cookie, user };
            } else {
                throw new WrongCredentialsException();
            }
        } else {
            throw new WrongCredentialsException();
        }
    }

    public createCookie(tokenData: TokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
    }
    public createToken(user: User): TokenData {
        const expiresIn = 60 * 60 * 24; //a day
        const secret = process.env.JWT_SECRET;
        const dataStoredInToken: DataStoredInToken = {
            id: user.id,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
    }
}

export default AuthService;
