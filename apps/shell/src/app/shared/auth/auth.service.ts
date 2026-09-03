import { Injectable, signal } from '@angular/core';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}

/**
 * Shared authentication state that is passed to remote micro-frontends.
 * In the monolith, this was a singleton service. In the MFE architecture,
 * this is shared via Module Federation's shared scope.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authState = signal<AuthState>({
    isAuthenticated: false,
    token: null,
    username: null,
  });

  readonly isAuthenticated = () => this.authState().isAuthenticated;
  readonly token = () => this.authState().token;
  readonly username = () => this.authState().username;

  login(token: string, username: string): void {
    this.authState.set({ isAuthenticated: true, token, username });
  }

  logout(): void {
    this.authState.set({ isAuthenticated: false, token: null, username: null });
  }
}
