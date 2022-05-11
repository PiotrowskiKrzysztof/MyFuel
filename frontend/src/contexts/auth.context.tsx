import * as React from 'react';
import { User } from '../utils/types';

type Action =
  | {
      type: 'login';
      payload: {
        user: User;
      };
    }
  | { type: 'logout' };

type Dispatch = (action: Action) => void;
type State = {
  isAuthenticated: boolean;
  user?: User;
};
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function authReducer(_: State, action: Action) {
  switch (action.type) {
    case 'login': {
      return { isAuthenticated: true, user: action.payload.user };
    }
    case 'logout': {
      return { isAuthenticated: false, user: undefined };
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = React.useReducer(authReducer, {
    isAuthenticated: false,
    user: undefined,
  });
  const value = { state, dispatch };
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
