import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'
import { CategoriesModule } from './categories/categories.module'
import { BrandsModule } from './brands/brands.module'
import { ProductImagesModule } from './product-images/product-images.module'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [CategoriesModule, BrandsModule, ProductImagesModule]
})
export class ProductsModule {}
