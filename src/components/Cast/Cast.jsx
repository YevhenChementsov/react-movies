import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import useAxios from 'hooks/useAxios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useAxios({
    axiosInstance,
    url: `movie/${movieId}/credits`,
  });

  return (
    <ul className="flex flex-col gap-4 md:[grid-area:3/1/4/3]">
      {cast ? (
        cast?.cast
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
          .slice(0, 10)
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default Cast;
