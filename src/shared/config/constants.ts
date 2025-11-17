export const APP_CONSTANTS = {
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_PER_PAGE: 10,
    MAX_PER_PAGE: 100,
  },
  
  CACHE: {
    TTL: {
      SHORT: 60, 
      MEDIUM: 300, 
      LONG: 3600, 
    },
    KEYS: {
      STUDENTS_LIST: 'students:list',
      STUDENT_BY_ID: 'student:id',
      COURSES_LIST: 'courses:list',
      COURSE_BY_ID: 'course:id',
    },
  },
  
  VALIDATION: {
    CPF_LENGTH: 11,
    MIN_PASSWORD_LENGTH: 6,
    MAX_NAME_LENGTH: 100,
    MAX_EMAIL_LENGTH: 255,
  },
  
  DATES: {
    MIN_AGE: 16, 
    MAX_AGE: 110,
  },
} as const;

export const GENDER_OPTIONS = ['Masculino', 'Feminino', 'Outro'] as const;

export const REGISTRATION_STATUS = {
  IN_PROGRESS: 'em_andamento',
  COMPLETED: 'concluido',
  CANCELLED: 'cancelado',
} as const;