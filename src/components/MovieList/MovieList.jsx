import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className="mt-4">
        {movies?.results.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className="text-blue-600 hover:text-red-400"
            >
              -&nbsp;{title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object,
  location: PropTypes.object,
};

export default MovieList;
