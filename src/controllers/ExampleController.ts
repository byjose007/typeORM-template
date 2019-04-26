import * as express from 'express';
import { Example } from '../models/Example/Example';



class ExampleController {
    public path = '/example';
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // Controller middleware
        //...
        
        // Controller endpoints
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/:id', this.getOne);

        this.router.post(this.path, this.createExample);

        this.router.put(this.path + '/:id', this.updateExample);

        this.router.delete(this.path + '/:id', this.deleteExample);
    }

    public async getAll (req: express.Request, res: express.Response) {
        const examples = await Example.find();
        return res.send(examples);
    }

    public async getOne (req: express.Request, res: express.Response) {
        const example =  await Example.findOne(req.params.id);
        return res.send(example);
    }

    public async createExample (req: express.Request, res: express.Response) {
        const example = await Example.create(req.body);
        example.save();
        return res.send(example);
    }

    public async updateExample(req: express.Request, res: express.Response) {
        const example = await Example.findOne(req.params.id);
        if (example !== undefined) {
            await Example.update(req.params.id, req.body);
            return res.status(200).send({ message: 'Example updated correctly'});
        }

        return res.status(404).send({ message: 'Example not found'});
    }

    public async deleteExample(req: express.Request, res: express.Response) {
        Example.delete(req.params.id);
        return res.status(200).send({ message: 'Example deleted successfully'});
    }
}

export default ExampleController;