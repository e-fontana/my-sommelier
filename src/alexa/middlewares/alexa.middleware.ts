// alexa.middleware.ts
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { RequestHandler } from 'express';

export function createAlexaMiddleware(adapter: ExpressAdapter): RequestHandler {
  const middlewares = adapter.getRequestHandlers();

  return async (req, res, _): Promise<void> => {
    try {
      await new Promise<void>((resolve, reject) => {
        const first = middlewares[0];
        const second = middlewares[1];

        if (!first) {
          return reject(new Error('Alexa middleware not found'));
        }

        first(req, res, (err?: unknown) => {
          if (err instanceof Error) {
            return reject(err);
          }

          if (second) {
            second(req, res, () => resolve());
          } else {
            resolve();
          }
        });
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Unknown verification error';

      res.status(400).json({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Request verification failed',
        details: message,
      });
    }
  };
}
