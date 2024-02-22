import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import useAxios from 'hooks/useAxios';

const HomePage = () => {
  const [movies] = useAxios({
    axiosInstance,
    url: 'trending/movie/day',
  });

  return (
    <>
      <h2 className="text-2xl font-semibold">Trending today</h2>
      {movies ? <MovieList movies={movies} /> : <Loader />}
    </>
  );
};

export default HomePage;
