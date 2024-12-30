import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { CartModule } from './cart/cart.module'
import { OrdersModule } from './orders/orders.module'
import { ReviewsModule } from './reviews/reviews.module'
import { NotificationsModule } from './notifications/notifications.module'
import { AdminModule } from './admin/admin.module'
import { ReportsModule } from './reports/reports.module'

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    ReviewsModule,
    NotificationsModule,
    AdminModule,
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
