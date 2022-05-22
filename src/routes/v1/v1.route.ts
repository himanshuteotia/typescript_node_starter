import { Routes } from '../routes.abstract';
import { UserRoute } from './users/user.route';

export class RoutesV1 extends Routes {
  public routes(): void {
    this.router.route('/users').get(new UserRoute().get);
  }
}
