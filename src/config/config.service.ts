import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfigDTO } from './app.config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get appConfig(): AppConfigDTO {
    return this.configService.get<AppConfigDTO>('appConfig')!;
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
    };
  }
}
