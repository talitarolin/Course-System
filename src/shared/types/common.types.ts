export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export interface PaginationParams {
  page: number;
  perPage: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface SortParams {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export type Gender = 'Masculino' | 'Feminino' | 'Outro';

export type RegistrationStatus = 'em_andamento' | 'concluido' | 'cancelado';

export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}