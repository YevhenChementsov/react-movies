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
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
