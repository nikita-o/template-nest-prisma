import { Module } from '@nestjs/common';
import { ShopModule } from './modules/shop/shop.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, ShopModule],
})
export class AppModule {}
