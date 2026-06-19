import React, { createContext, useState, ReactNode } from 'react';
import { SharedAuthState } from '@decomposition/shared';

interface AuthContextValue extends SharedAuthState {
  login: (token: string, username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<SharedAuthState>({
    isAuthenticated: false,
    token: null,
    username: null,
  });

  const login = (token: string, username: string) => {
    setAuthState({ isAuthenticated: true, token, username });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, token: null, username: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
