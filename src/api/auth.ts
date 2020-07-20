import client from './client';

/* -------------------------------------------------------------------------- */

const endpoint = '/auth';

const login = (email: string, password: string) => client.post<string>(endpoint, { email, password });

export default { login };
