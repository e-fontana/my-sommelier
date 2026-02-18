import { plainToInstance } from 'class-transformer';
import { IsEnum, IsString, validateSync } from 'class-validator';
import * as dotenv from 'dotenv';

dotenv.config();

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnviromentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsString()
  DATABASE_URL!: string;
}

const envVars = plainToInstance(EnviromentVariables, process.env);

const errors = validateSync(envVars, {
  skipMissingProperties: false,
  whitelist: true,
});

if (errors.length > 0) {
  console.error('❌ Erro nas variáveis de ambiente:', errors);
  process.exit(1);
}

export const env = envVars;
