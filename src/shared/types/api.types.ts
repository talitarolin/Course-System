import { NextApiRequest } from 'next';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: number;
    email: string;
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  pagination?: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestValidation {
  body?: any;
  query?: any;
  params?: any;
}