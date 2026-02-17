import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
    bodyParser: false,
  });
  await app.listen(process.env.PORT ?? 3000).then(() => {
    logger.debug(`Server is running on port ${process.env.PORT ?? 3000}`);
  });
}

bootstrap()
  .then(() => {
    logger.debug('Application bootstrap completed');
  })
  .catch((error) => {
    logger.error('Error during application bootstrap', error);
  });
