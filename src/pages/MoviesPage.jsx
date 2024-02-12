import { useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import useAxios from 'hooks/useAxios';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [queryURL, setQueryURL] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies] = useAxios({
    axiosInstance,
    url: `search/movie?query=${queryURL}`,
    dependencies: [queryURL],
  });

  useEffect(() => {
    if (!query) return;
    setQueryURL(query);
    // eslint-disable-next-line
  }, []);

  const handleSubmitValue = value => setQueryURL(value);

  return (
    <>
      <SearchForm onSubmit={handleSubmitValue} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
