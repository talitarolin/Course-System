export enum ErrorCode {
  // Erro de Validação (400)
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_CPF = 'INVALID_CPF',
  INVALID_EMAIL = 'INVALID_EMAIL',
  INVALID_DATE = 'INVALID_DATE',
  REQUIRED_FIELD = 'REQUIRED_FIELD',

  // Erro de Negócio (400)
  STUDENT_ALREADY_EXISTS = 'STUDENT_ALREADY_EXISTS',
  COURSE_NOT_FOUND = 'COURSE_NOT_FOUND',
  STUDENT_NOT_FOUND = 'STUDENT_NOT_FOUND',
  REGISTRATION_ALREADY_EXISTS = 'REGISTRATION_ALREADY_EXISTS',
  REGISTRATION_NOT_FOUND = 'REGISTRATION_NOT_FOUND',

  // Erro de Autenticação (401)
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  FORBIDDEN = 'FORBIDDEN',

  // Erro no Servidor (500)
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  CACHE_ERROR = 'CACHE_ERROR',

  // Erro de Limite de Taxa (429)
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
}

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.VALIDATION_ERROR]: 'Erro de validação nos dados fornecidos',
  [ErrorCode.INVALID_CPF]: 'CPF inválido',
  [ErrorCode.INVALID_EMAIL]: 'Email inválido',
  [ErrorCode.INVALID_DATE]: 'Data inválida',
  [ErrorCode.REQUIRED_FIELD]: 'Campo obrigatório não fornecido',
  
  [ErrorCode.STUDENT_ALREADY_EXISTS]: 'Aluno já cadastrado com este email ou CPF',
  [ErrorCode.COURSE_NOT_FOUND]: 'Curso não encontrado',
  [ErrorCode.STUDENT_NOT_FOUND]: 'Aluno não encontrado',
  [ErrorCode.REGISTRATION_ALREADY_EXISTS]: 'Matrícula já existe para este aluno e curso',
  [ErrorCode.REGISTRATION_NOT_FOUND]: 'Matrícula não encontrada',
  
  [ErrorCode.UNAUTHORIZED]: 'Não autorizado. Faça login para continuar',
  [ErrorCode.INVALID_CREDENTIALS]: 'Email ou senha incorretos',
  [ErrorCode.TOKEN_EXPIRED]: 'Token expirado. Faça login novamente',
  [ErrorCode.FORBIDDEN]: 'Você não tem permissão para acessar este recurso',
  
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'Erro interno do servidor',
  [ErrorCode.DATABASE_ERROR]: 'Erro ao acessar banco de dados',
  [ErrorCode.CACHE_ERROR]: 'Erro ao acessar cache',
  
  [ErrorCode.RATE_LIMIT_EXCEEDED]: 'Muitas requisições. Tente novamente mais tarde',
};