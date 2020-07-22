import client from './client';

/* -------------------------------------------------------------------------- */

const endpoint = '/expoPushTokens';

const register = (pushToken: string) => client.post(endpoint, { token: pushToken });

export default { register };
