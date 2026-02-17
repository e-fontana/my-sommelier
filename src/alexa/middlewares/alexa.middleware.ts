import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AlexaLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AlexaLoggerMiddleware.name);

  use(req: Request, _res: Response, next: NextFunction): void {
    this.logger.log(`Headers recebidos:`);

    this.logger.debug(JSON.stringify(req.headers, null, 2));

    next();
  }
}
