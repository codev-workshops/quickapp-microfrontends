/**
 * Standard API response wrapper used across all micro-frontends.
 * Mirrors the response shape from the .NET microservices.
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string | null;
  errors: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}
