import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
import { config } from 'config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port, () => {
    Logger.log(`server start: ${config.host}:${config.port}`, 'Main');
  });
}
bootstrap();
