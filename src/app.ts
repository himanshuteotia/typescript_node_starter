import express from 'express';
export class App {
  constructor(public port: number) {}

  loggerMiddleware(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) {
    console.log(`${request.method} ${request.path}`);
    next();
  }

  createApp() {
    const app: express.Application = express();
    app.use(this.loggerMiddleware);
    return app;
  }

  startServer() {
    const app = this.createApp();
    app.listen(this.port, (err: any) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.port}`);
    });
  }
}
