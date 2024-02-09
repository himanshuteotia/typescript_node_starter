import express from 'express';
import compression from 'compression'; // compresses requests
import lusca from 'lusca';
import path from 'path';
import logger from './utils/logger.util';
import { RoutesV1 } from './routes/v1/v1.route';
import rateLimitRequestHandler from './middlewares/rate-limit.middleware';
import { LoggerMiddleware } from './middlewares/logger.middleware';
export default class App {
  constructor(public port: number) {}

  createApp(): express.Application {
    const app: express.Application = express();
    // Trust specific proxies (replace 'loopback' with your trusted proxy's IP or subnet)
    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
    app.use(compression());
    app.use(lusca.xframe('SAMEORIGIN'));
    app.use(lusca.xssProtection(true));
    app.use(
      express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
    );
    app.use(rateLimitRequestHandler());
    app.use('/', (req, res)=> res.status(200).send("Welcome"))
    app.use(
      '/v1/',
      new LoggerMiddleware().endpointsLogs,
      new RoutesV1().router
    );
    return app;
  }

  startServer(): void {
    const app = this.createApp();
    app.listen(this.port);
    logger.info(`server is listening on ${this.port}`);
  }
}
