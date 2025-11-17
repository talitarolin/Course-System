import { ErrorCode, ErrorMessages } from './error-codes';

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    public readonly statusCode: number,
    public readonly message: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }

  static validation(message?: string, details?: any): AppError {
    return new AppError(
      ErrorCode.VALIDATION_ERROR,
      400,
      message || ErrorMessages[ErrorCode.VALIDATION_ERROR],
      details
    );
  }

  static notFound(code: ErrorCode, message?: string): AppError {
    return new AppError(
      code,
      404,
      message || ErrorMessages[code],
    );
  }

  static unauthorized(message?: string): AppError {
    return new AppError(
      ErrorCode.UNAUTHORIZED,
      401,
      message || ErrorMessages[ErrorCode.UNAUTHORIZED]
    );
  }

  static forbidden(message?: string): AppError {
    return new AppError(
      ErrorCode.FORBIDDEN,
      403,
      message || ErrorMessages[ErrorCode.FORBIDDEN]
    );
  }

  static conflict(code: ErrorCode, message?: string): AppError {
    return new AppError(
      code,
      409,
      message || ErrorMessages[code]
    );
  }

  static businessError(code: ErrorCode, message?: string): AppError {
    return new AppError(
      code,
      422,
      message || ErrorMessages[code]
    );
  }

  static internal(message?: string, details?: any): AppError {
    return new AppError(
      ErrorCode.INTERNAL_SERVER_ERROR,
      500,
      message || ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR],
      details
    );
  }

  static rateLimitExceeded(): AppError {
    return new AppError(
      ErrorCode.RATE_LIMIT_EXCEEDED,
      429,
      ErrorMessages[ErrorCode.RATE_LIMIT_EXCEEDED]
    );
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      ...(this.details && { details: this.details }),
    };
  }
}