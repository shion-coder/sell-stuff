import createContext from './create-context-state';

/* -------------------------------------------------------------------------- */

export interface IUser {
  email: string;
  name: string;
  userId: number;
  iat: string;
}

export const [AuthContext, AuthProvider] = createContext<IUser | null>(null);
