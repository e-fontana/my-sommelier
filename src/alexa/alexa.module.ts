import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { skillAdapter } from './adapters/alexa.adapter';

@Module({})
export class AlexaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(...skillAdapter.getRequestHandlers()).forRoutes('alexa');
  }
}
