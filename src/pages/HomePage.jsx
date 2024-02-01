import { useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [err, setError] = useState('');

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
      <h2 className="py-4 text-2xl font-semibold">Trending today</h2>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id} className="list-inside list-disc">
            <Link to={`/movies/${movie.id}`} className="hover:text-red-400">
              {movie?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
