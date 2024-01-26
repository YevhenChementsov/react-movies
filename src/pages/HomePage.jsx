import axios from 'api/tmdbApi';
import useAxios from 'hooks/useAxios';

const Home = () => {
  const [movies] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/movie/popular',
  });
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
