import { create } from 'apisauce';

import cache from 'utils';
import { getToken } from 'context';

/* -------------------------------------------------------------------------- */

const client = create({
  baseURL: 'http://172.20.10.3:9000/api',
});

client.addAsyncRequestTransform(async (request) => {
  const token = await getToken();

  if (token) request.headers['x-auth-token'] = token;
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : (response as any);
};

export default client;
