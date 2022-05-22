import express from 'express';
import compression from 'compression'; // compresses requests
import lusca from 'lusca';
import path from 'path';
import logger from './util/logger';
export default class App {
  constructor(public port: number) {}

  loggerMiddleware(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    logger.info(`${request.method} ${request.path}`);
    next();
  }

  createApp(): express.Application {
    const app: express.Application = express();
    app.use(compression());
    app.use(lusca.xframe('SAMEORIGIN'));
    app.use(lusca.xssProtection(true));
    app.use(
      express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
    );
    return app;
  }

  startServer(): void {
    const app = this.createApp();
    app.listen(this.port);
    logger.info(`server is listening on ${this.port}`);
  }
}
