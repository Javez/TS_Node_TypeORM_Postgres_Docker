import * as bodyParser from 'body-parser';
import express from 'express';
import Controller from './controllers/controller.interface';
import errorMiddleware from './middleware/error.middleware';
import { DataSource } from 'typeorm';

class App {
    public app: express.Application;
    public datasource: DataSource;
    public port: number;

    constructor(controllers: Controller[], datasource: DataSource, port: number) {
        this.app = express();
        this.datasource = datasource;
        this.port = port;
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getServer() {
        return this.app;
    }

    public getDataSource() {
        return this.datasource;
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private connectToTheDatabase = async () => {
        try {
            await this.datasource.initialize();
        } catch (error) {
            console.log('Error while connecting to the database', error);
            return error;
        }
    };
}

export default App;
