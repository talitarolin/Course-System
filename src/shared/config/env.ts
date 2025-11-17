import { AppError } from '../errors/app.error';

interface EnvConfig {
  database: {
    url: string;
  };
  jwt: {
    secret: string;
    expiresIn: string;
    refreshExpiresIn: string;
  };
  redis: {
    url: string;
    host: string;
    port: number;
    password?: string;
  };
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
  app: {
    port: number;
    nodeEnv: string;
    isDevelopment: boolean;
    isProduction: boolean;
  };
  encryption: {
    key: string;
  };
}

class EnvValidator {
  private config: EnvConfig;

  constructor() {
    this.config = this.loadConfig();
    this.validate();
  }

  private loadConfig(): EnvConfig {
    return {
      database: {
        url: process.env.DATABASE_URL || 'postgresql://postgres:2810@localhost:5432/gerenciador_cursos?schema=public',
      },
      jwt: {
        secret: process.env.JWT_SECRET || 'supersecretkey_2024_gerenciador_cursos_minimum_32_chars',
        expiresIn: process.env.JWT_EXPIRES_IN || '15m',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
      },
      redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD,
      },
      rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 min
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
      },
      app: {
        port: parseInt(process.env.PORT || '3000'),
        nodeEnv: process.env.NODE_ENV || 'development',
        isDevelopment: process.env.NODE_ENV !== 'production',
        isProduction: process.env.NODE_ENV === 'production',
      },
      encryption: {
        key: process.env.ENCRYPTION_KEY || 'default_encryption_key_32chars!!',
      },
    };
  }

  private validate(): void {
    const errors: string[] = [];

    if (!this.config.database.url) {
      errors.push('DATABASE_URL é obrigatório');
    }

    if (!this.config.jwt.secret || this.config.jwt.secret.length < 32) {
      errors.push('JWT_SECRET deve ter pelo menos 32 caracteres');
    }

    if (!this.config.encryption.key || this.config.encryption.key.length < 32) {
      errors.push('ENCRYPTION_KEY deve ter pelo menos 32 caracteres');
    }

    if (errors.length > 0) {
      console.error('❌ Erros de configuração:', errors);
      if (this.config.app.isProduction) {
        throw AppError.internal('Configuração inválida', errors);
      }
    }

    console.log('✅ Configurações validadas com sucesso!');
  }

  getConfig(): EnvConfig {
    return this.config;
  }
}

const envValidator = new EnvValidator();
export const env = envValidator.getConfig();