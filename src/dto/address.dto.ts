import { IsString } from 'class-validator';

class CreateAddressDTO {
    @IsString()
    public street: string;

    @IsString()
    public city: string;

    @IsString()
    public country: string;
}

export default CreateAddressDTO;
