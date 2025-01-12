import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'

export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'digital_store',
  autoLoadEntities: true,
  synchronize: true, // Solo en desarrollo
  retryAttempts: 10, // Reintenta hasta 10 veces
  retryDelay: 3000 // Espera 3 segundos entre intentos
}
