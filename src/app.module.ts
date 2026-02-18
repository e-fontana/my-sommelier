import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlexaModule } from './alexa/alexa.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AlexaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
