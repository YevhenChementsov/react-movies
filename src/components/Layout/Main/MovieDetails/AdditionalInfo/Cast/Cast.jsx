import { useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`movie/${movieId}/credits`, {
          signal: controller.current,
        });
        setCast(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  console.log(cast);
  return <div>Cast of the {movieId}</div>;
};

export default Cast;
