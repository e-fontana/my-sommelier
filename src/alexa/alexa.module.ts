import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { skillAdapter } from './adapters/alexa.adapter';
import { AlexaLoggerMiddleware } from './middlewares/alexa.middleware';

@Module({})
export class AlexaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AlexaLoggerMiddleware, ...skillAdapter.getRequestHandlers())
      .forRoutes('alexa');
  }
}
