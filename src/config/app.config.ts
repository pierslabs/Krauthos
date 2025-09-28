import { IsNumber, IsString } from 'class-validator';
import { registerAs } from '@nestjs/config';

export class AppConfigDTO {
  @IsNumber()
  port: number;
  @IsString()
  platform: string;
}

export const appConfig = registerAs(
  'appConfig',
  (): AppConfigDTO => ({
    port: parseInt(process.env.PORT ?? '3000'),
    platform: process.env.PLATFORM ?? 'development',
  }),
);
