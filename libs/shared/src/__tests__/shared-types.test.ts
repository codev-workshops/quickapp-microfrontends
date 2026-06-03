import { describe, it, expect } from 'vitest';
import {
  SharedAuthState,
  ApiResponse,
  PaginatedResponse,
} from '../index';

describe('SharedAuthState', () => {
  it('should compile with expected shape', () => {
    const state: SharedAuthState = {
      isAuthenticated: true,
      token: 'jwt-token-123',
      username: 'testuser',
    };

    expect(state.isAuthenticated).toBe(true);
    expect(state.token).toBe('jwt-token-123');
    expect(state.username).toBe('testuser');
  });

  it('should allow null token and username', () => {
    const state: SharedAuthState = {
      isAuthenticated: false,
      token: null,
      username: null,
    };

    expect(state.isAuthenticated).toBe(false);
    expect(state.token).toBeNull();
    expect(state.username).toBeNull();
  });
});

describe('ApiResponse', () => {
  it('should compile with a string data type', () => {
    const response: ApiResponse<string> = {
      data: 'hello',
      success: true,
      message: null,
      errors: [],
    };

    expect(response.data).toBe('hello');
    expect(response.success).toBe(true);
    expect(response.message).toBeNull();
    expect(response.errors).toEqual([]);
  });

  it('should compile with a complex data type', () => {
    interface Product {
      id: number;
      name: string;
    }

    const response: ApiResponse<Product> = {
      data: { id: 1, name: 'Widget' },
      success: true,
      message: 'Found',
      errors: [],
    };

    expect(response.data.id).toBe(1);
    expect(response.data.name).toBe('Widget');
  });
});

describe('PaginatedResponse', () => {
  it('should compile with pagination fields', () => {
    const response: PaginatedResponse<number> = {
      data: [1, 2, 3],
      success: true,
      message: null,
      errors: [],
      totalCount: 100,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 10,
    };

    expect(response.data).toEqual([1, 2, 3]);
    expect(response.totalCount).toBe(100);
    expect(response.pageNumber).toBe(1);
    expect(response.pageSize).toBe(10);
    expect(response.totalPages).toBe(10);
  });
});

describe('Barrel exports', () => {
  it('should export all symbols from index', async () => {
    const barrel = await import('../index');

    expect(barrel).toBeDefined();
    // SharedAuthState is a type-only export, so it won't appear at runtime.
    // ApiResponse and PaginatedResponse are also type-only.
    // The barrel itself should be importable without errors.
    expect(typeof barrel).toBe('object');
  });
});
