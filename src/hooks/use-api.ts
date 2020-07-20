import { useState } from 'react';

/* -------------------------------------------------------------------------- */

export const useApi = <T, U = T>(apiFunc: (value?: any) => any) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data!);

    return response;
  };

  return { data, error, loading, request };
};
