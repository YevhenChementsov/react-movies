import { Suspense, useEffect, useRef, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  // const [err, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`movie/${movieId}`, {
          signal: controller.current,
        });
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        // setError(error.message);
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {/* original title(release date)
      tagline
      vote runtime
      average
      overview
      genres */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link
            to={backLinkRef.current}
            className="mt-4 inline-block rounded-lg border border-solid border-transparent bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
          >
            &#8920; Go back
          </Link>
          <div className="mt-2 flex pb-4 shadow-lg">
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
              alt={movie?.title}
            />
          </div>
          <ul className="mt-4">
            <h3>Additional Information:</h3>
            <li>
              <Link className="ml-4 text-blue-600 hover:text-red-400" to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 text-blue-600 hover:text-red-400"
                to="reviews"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
