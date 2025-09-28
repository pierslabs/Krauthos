import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { PostgresModule } from './database/postgres.module';

@Module({
  imports: [ConfigModule, PostgresModule],
})
export class AppModule {}
