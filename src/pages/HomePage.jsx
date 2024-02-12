import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import useAxios from 'hooks/useAxios';

const HomePage = () => {
  const [movies] = useAxios({
    axiosInstance,
    url: 'trending/movie/day',
  });

  return movies ? (
    <>
      <h2 className="mt-4 text-2xl font-semibold">Trending today</h2>
      <MovieList movies={movies} />
    </>
  ) : (
    <Loader />
  );
};

export default HomePage;
