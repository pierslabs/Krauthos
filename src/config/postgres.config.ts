import { IsNumber, IsString } from 'class-validator';
import { registerAs } from '@nestjs/config';

export class PostgresConfigDTO {
  @IsString()
  host!: string;
  @IsNumber()
  port!: number;
  @IsString()
  database!: string;
  @IsString()
  username!: string;
  @IsString()
  password!: string;
}

export const postgresConfig = registerAs(
  'postgresConfig',
  (): PostgresConfigDTO => ({
    host: process.env.DB_HOST ?? process.env.POSTGRES_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? process.env.POSTGRES_PORT ?? '5432'),
    database: process.env.DB_NAME ?? process.env.POSTGRES_DB ?? 'krauthos_db',
    username:
      process.env.DB_USER ?? process.env.POSTGRES_USER ?? 'krauthos_user',
    password:
      process.env.DB_PASSWORD ??
      process.env.POSTGRES_PASSWORD ??
      'krauthos_password',
  }),
);
