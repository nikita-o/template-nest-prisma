import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

async function bootstrap() {
  console.log(process.env.DATABASE_URL);

  const app = await NestFactory.create(AppModule);

  // Issues with enableShutdownHooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000, () => {
    Logger.log(`server start: localhost:3000`, 'Main');
  });
}
bootstrap();
