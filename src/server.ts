import App from './App';
import ExampleController from './controllers/ExampleController';

const controllers = [new ExampleController()];
const app = new App(controllers, 3000);

app.listen();

export default app;
