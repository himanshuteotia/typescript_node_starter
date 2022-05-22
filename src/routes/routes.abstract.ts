import { Router } from 'express';

export abstract class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  protected abstract routes(): void;
}
