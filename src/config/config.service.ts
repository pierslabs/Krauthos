import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfigDTO } from './app.config';
import { PostgresConfigDTO } from './postgres.config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get appConfig(): AppConfigDTO {
    return this.configService.get<AppConfigDTO>('appConfig')!;
  }

  get postgresConfig(): PostgresConfigDTO {
    return this.configService.get<PostgresConfigDTO>('postgresConfig')!;
  }

  getOrThrow<T>(key: string): T {
    const value = this.configService.get<T>(key);
    if (value === undefined || value === null) {
      throw new Error(`❌ Required configuration variable not found: ${key}`);
    }
    return value;
  }

  getWithDefault<T>(key: string, defaultValue: T): T {
    return this.configService.get<T>(key, defaultValue);
  }

  getSystemInfo() {
    return {
      appConfig: {
        port: this.appConfig.port,
        platform: this.appConfig.platform,
      },
      postgresConfig: {
        host: this.postgresConfig.host,
        port: this.postgresConfig.port,
        database: this.postgresConfig.database,
        username: this.postgresConfig.username,
        password: this.postgresConfig.password,
      },
    };
  }
}
