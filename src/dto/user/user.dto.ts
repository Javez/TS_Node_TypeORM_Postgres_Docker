import { IsOptional, IsString, ValidateNested } from "class-validator";
import CreateAddressDTO from "../address/address.dto";

class CreateUserDTO {
    @IsString()
    public name: string;

    @IsString()
    public email: string;

    @IsString()
    public password: string;

    @IsOptional()
    @ValidateNested()
    public address?: CreateAddressDTO;
}

export default CreateUserDTO;
