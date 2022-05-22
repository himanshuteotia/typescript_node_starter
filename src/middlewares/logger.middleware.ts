import logger from '../utils/logger.util';
import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware {
  endpointsLogs(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    logger.info(`${request.method} ${request.path}`);
    next();
  }
}
