import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import Database from '../config/orm.config';
import Address from '../model/address.model';
import { Repository } from 'typeorm';

class AddressController implements Controller {
    public path: string = '/address';
    public router: Router = Router();
    private addressRepository: Repository<Address> =
        Database.getInstance().getRepository(Address);
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(this.path, this.getAllAddresses);
    }

    private getAllAddresses(req: Request, res: Response) {
        const addresses = this.addressRepository.find({ relations: ['user'] });
        res.send(addresses);
    }
}

export default AddressController;
