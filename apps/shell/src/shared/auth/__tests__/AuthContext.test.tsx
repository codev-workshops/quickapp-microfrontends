import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, AuthContext } from '../AuthContext';

function TestConsumer() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) return <span>no context</span>;
  return (
    <div>
      <span data-testid="auth">{String(ctx.isAuthenticated)}</span>
      <span data-testid="token">{String(ctx.token)}</span>
      <span data-testid="username">{String(ctx.username)}</span>
      <button data-testid="login" onClick={() => ctx.login('tok123', 'alice')} />
      <button data-testid="logout" onClick={() => ctx.logout()} />
    </div>
  );
}

describe('AuthProvider', () => {
  it('has correct default state', () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );
    expect(screen.getByTestId('auth').textContent).toBe('false');
    expect(screen.getByTestId('token').textContent).toBe('null');
    expect(screen.getByTestId('username').textContent).toBe('null');
  });

  it('updates state after login', () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );
    act(() => {
      screen.getByTestId('login').click();
    });
    expect(screen.getByTestId('auth').textContent).toBe('true');
    expect(screen.getByTestId('token').textContent).toBe('tok123');
    expect(screen.getByTestId('username').textContent).toBe('alice');
  });

  it('resets state after login then logout', () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );
    act(() => {
      screen.getByTestId('login').click();
    });
    act(() => {
      screen.getByTestId('logout').click();
    });
    expect(screen.getByTestId('auth').textContent).toBe('false');
    expect(screen.getByTestId('token').textContent).toBe('null');
    expect(screen.getByTestId('username').textContent).toBe('null');
  });
});
