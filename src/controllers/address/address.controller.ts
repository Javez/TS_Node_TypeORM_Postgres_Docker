import { Request, Response, Router } from 'express';
import Controller from '../controller.interface';
import AppSource from '../../config/orm.config';
import Address from '../../model/address/address.model';

export class AddressController implements Controller {
    public path: string = '/address';
    public router: Router = Router();
    private addressRepository = AppSource.getRepository(Address);

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
