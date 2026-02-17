import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlexaModule } from './alexa/alexa.module';

@Module({
  imports: [AlexaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
