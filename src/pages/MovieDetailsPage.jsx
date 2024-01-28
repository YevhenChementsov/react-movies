import { Suspense } from 'react';

import Loader from 'components/Loader/Loader';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <button type="button" onClick={() => goBack()}>
        Back
      </button>
      <h2>{movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
