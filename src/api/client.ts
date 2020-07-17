import { create } from 'apisauce';

/* -------------------------------------------------------------------------- */

const client = create({
  baseURL: 'http://172.20.10.3:9000/api',
});

export default client;
