export interface SharedAuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}
