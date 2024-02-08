import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import useAxios from 'hooks/useAxios';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [movies] = useAxios({
    axiosInstance,
    url: 'trending/movie/day',
  });

  return movies ? (
    <>
      <h2 className="mt-4 text-2xl font-semibold">Trending today</h2>
      <ul className="mt-4">
        {movies.results.map(({ id, title }) => (
          <li key={id} className="ml-4">
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className="text-blue-600 hover:text-red-400"
            >
              -&nbsp;&nbsp;{title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <Loader />
  );
};

export default HomePage;
