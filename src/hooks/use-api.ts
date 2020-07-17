import { useState } from 'react';
import { ApiResponse } from 'apisauce';

/* -------------------------------------------------------------------------- */

export const useApi = <T>(apiFunc: () => Promise<ApiResponse<T[], T[]>>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setData(response.data!);
  };

  return { data, error, loading, request };
};
