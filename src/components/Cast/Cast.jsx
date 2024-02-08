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
        const { data } = await axiosInstance.get(`movie/${movieId}/credits`, {
          signal: controller.current,
        });
        setCast(data);
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

  return (
    <ul className="mt-4 flex flex-col gap-4 [grid-area:4/1/5/3]">
      {cast &&
        cast.cast
          .map(
            ({ id, profile_path, name, character }) =>
              profile_path && (
                <li key={id} className="flex">
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
                    alt={name}
                  />
                  <div className="p-3">
                    <h3>
                      <b>{name}</b>
                    </h3>
                    {character && (
                      <p className="block text-sm">
                        Character: <span>{character}</span>
                      </p>
                    )}
                  </div>
                </li>
              ),
          )
          .slice(0, 10)}
    </ul>
  );
};

export default Cast;
