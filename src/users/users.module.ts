import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { AuthModule } from './auth/auth.module'
import { RolesModule } from './roles/roles.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule, RolesModule]
})
export class UsersModule {}
