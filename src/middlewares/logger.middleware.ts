import logger from '../utils/logger.util';
import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

export class LoggerMiddleware {
  endpointsLogs(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    if(config?.debug){
      logger.info(`${request.method} ${request.path}`);
    }
    next();
  }
}
