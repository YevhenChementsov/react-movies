import { Suspense, useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

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
        setError(error.message);
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  console.log(err);

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
          <button className="" type="button" onClick={() => navigate(-1)}>
            &#8920; Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
          />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
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
