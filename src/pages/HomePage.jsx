import { useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [err, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('trending/movie/day', {
          signal: controller.current,
        });
        setMovies(res.data.results);
      } catch (error) {
        setError(error.message);
        console.log(err);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className="mt-4 text-2xl font-semibold">Trending today</h2>
      <ul className="mt-4">
        {movies?.map(({ id, title }) => (
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
  );
};

export default HomePage;
