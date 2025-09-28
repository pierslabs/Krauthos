import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('postgresConfig');
        const appConfig = configService.get('appConfig');

        return {
          type: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.username,
          password: config.password,
          autoLoadEntities: true,
          synchronize: appConfig.platform === 'development',
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class PostgresModule {}
