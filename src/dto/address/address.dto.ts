import { IsOptional, IsString, ValidateNested } from 'class-validator';
import User from '../../model/user/user.model';
import CreateUserDTO from '../user/user.dto';

class CreateAddressDTO {
    @IsString()
    public street: string;

    @IsString()
    public city: string;

    @IsString()
    public country: string;
}

export default CreateAddressDTO;