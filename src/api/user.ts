import client from './client';

/* -------------------------------------------------------------------------- */

const endpoint = '/users';

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export const register = (userInfo: IRegister) => client.post<string, { error: string }>(endpoint, userInfo);
