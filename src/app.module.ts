import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { ProductModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'ecommerce',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,ProductModule,OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
