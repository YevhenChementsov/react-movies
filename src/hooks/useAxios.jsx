import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const useAxios = ({ axiosInstance, url, dependencies = [] }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(url, {
          signal: controller.current,
        });
        setResponse(data);
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
  }, dependencies);

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
  url: PropTypes.string.isRequired,
  dependencies: PropTypes.arrayOf(PropTypes.string),
};

export default useAxios;
