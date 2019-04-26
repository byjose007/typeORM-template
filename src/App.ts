import * as express from 'express';
import { createConnection, Connection } from 'typeorm';

class App {
    public app: express.Application;
    public port: number;
    public connection: Connection; // TypeORM connection to the database

    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port;
        this.initializeModels();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private async initializeModels() {
        const connection = await createConnection();
        if (connection === undefined) { throw new Error('Error connecting to database'); } // In case the connection failed, the app stops.
        connection.synchronize(); // this updates the database schema to match the models' definitions (TODO: Set migrations)
        this.connection = connection; // Store the connection oject in the class instance because it might be needed in some cases, but it's mostly useless.
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }
    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default App;