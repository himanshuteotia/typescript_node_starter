import { NextFunction, Request, Response } from 'express';

export class UserRoute {
  public get(req: Request, res: Response, next: NextFunction): void {
    res.status(200).json([
      { name: 'Himanshu', department: 'AI', email: 'ai@gmail.com' },
      { name: 'Rahul', department: 'SCIENCE', email: 'science@gmail.com' }
    ]);
  }
}
