import { useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import useAxios from 'hooks/useAxios';

const MoviesPage = () => {
  const [queryURL, setQueryURL] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies] = useAxios({
    axiosInstance,
    url: `search/movie?query=${query}`,
    dependencies: [queryURL],
  });

  // useEffect(() => {
  //   const controller = new AbortController();

  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axiosInstance.get(
  //         `search/movie?query=${query}`,
  //         {
  //           signal: controller.current,
  //         },
  //       );
  //       setMovies(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     controller.abort();
  //   };
  //   // eslint-disable-next-line
  // }, [queryURL]);

  const handleSubmit = e => {
    e.preventDefault();
    setQueryURL({ query });
  };

  const updateQuery = ({ target: { value } }) =>
    setSearchParams(value === '' ? {} : { query: value.toLowerCase() });

  return (
    <>
      <form autoComplete="off" className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus
          className="w-[clamp(176px,50vw,376px)] rounded-lg border border-solid border-black px-3 py-1 outline-offset-0 outline-red-400"
          value={query}
          onChange={updateQuery}
        />
        <button
          type="submit"
          className="w-[96px] rounded-lg border border-solid border-transparent bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
        >
          Search
        </button>
      </form>
      <div>
        <h2>Searching results for {query}:</h2>
        <ul className="mt-4">
          {movies?.results.map(({ id, title }) => (
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
      </div>
    </>
  );
};

export default MoviesPage;
