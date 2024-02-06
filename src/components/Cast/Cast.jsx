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
    // eslint-disable-next-line
  }, []);
  console.log(cast);
  return (
    <ul>
      {cast &&
        cast.cast
          .map(
            ({ id, profile_path, name, character, original_name }) =>
              profile_path && (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
                    alt={name}
                  />
                  <h3>{original_name}</h3>
                  <p>
                    Character: <span>{character}</span>
                  </p>
                </li>
              ),
          )
          .slice(0, 10)}
    </ul>
  );
};

export default Cast;
