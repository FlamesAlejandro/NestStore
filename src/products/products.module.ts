import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'
import { CategoriesModule } from './categories/categories.module'
import { BrandsModule } from './brands/brands.module'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [CategoriesModule, BrandsModule]
})
export class ProductsModule {}
