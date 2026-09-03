import { InjectionToken } from '@angular/core';

export interface SharedAuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}

/**
 * Injection token for sharing auth state across micro-frontends.
 * The shell provides this token; remotes inject it to access auth context.
 */
export const SHARED_AUTH_STATE = new InjectionToken<SharedAuthState>('SharedAuthState');
