import axios from 'api/tmdbApi';
import useAxios from 'hooks/useAxios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/movie/popular',
  });
  console.log(movies);
  return (
    <>
      <h2 className="py-4 text-2xl font-semibold">Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className="list-inside list-disc">
            <Link to={`/movies/${movie.id}`} className="hover:text-red-400">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
