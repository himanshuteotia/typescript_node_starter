import App from './src/app';
import config from "./src/config/config";

const PORT = config.port;
const app = new App(PORT);

app.startServer();
