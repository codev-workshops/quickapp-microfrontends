import { createContext, useContext, useState, ReactNode } from 'react';

export interface SharedAuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}

interface AuthContextValue {
  auth: SharedAuthState;
  login: (token: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<SharedAuthState>({
    isAuthenticated: false,
    token: null,
    username: null,
  });

  const login = (token: string, username: string) =>
    setAuth({ isAuthenticated: true, token, username });

  const logout = () =>
    setAuth({ isAuthenticated: false, token: null, username: null });

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
