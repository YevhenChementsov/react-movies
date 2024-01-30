import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const useAxios = ({ axiosInstance, method, url, requestConfig = {} }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.current,
        });
        setResponse(res.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);

  return [response, error, loading];
};

useAxios.propTypes = {
  axiosInstance: PropTypes.shape({
    baseURL: PropTypes.string,
    headers: PropTypes.shape({
      accept: PropTypes.string.isRequired,
      Authorization: PropTypes.string.isRequired,
    }),
  }),
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  requestConfig: PropTypes.object,
};

export default useAxios;
