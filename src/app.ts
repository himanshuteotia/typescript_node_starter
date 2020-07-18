import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import path from 'path';
import logger from './util/logger';
export default class App {
  constructor(public port: number) {}

  loggerMiddleware(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) {
    logger.info(`${request.method} ${request.path}`);
    next();
  }

  createApp() {
    const app: express.Application = express();
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(lusca.xframe('SAMEORIGIN'));
    app.use(lusca.xssProtection(true));
    app.use(
      express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
    );
    return app;
  }

  startServer() {
    const app = this.createApp();
    app.listen(this.port, (err: any) => {
      if (err) {
        return logger.error(err);
      }
      return logger.info(`server is listening on ${this.port}`);
    });
  }
}
