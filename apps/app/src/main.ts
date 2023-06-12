import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import config from '../../../config/config.json';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port, () => {
    Logger.log(`server start: ${config.host}:${config.port}`, 'Main');
  });
}
bootstrap();
