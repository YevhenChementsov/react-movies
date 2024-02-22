import { Suspense, useRef } from 'react';

import axiosInstance from 'api/tmdbApi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import useAxios from 'hooks/useAxios';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const [movie] = useAxios({
    axiosInstance,
    url: `movie/${movieId}`,
    dependencies: [movieId],
  });

  return (
    <>
      <Link
        to={backLinkRef.current}
        className="rounded-lg border border-solid border-transparent bg-red-400 px-2.5 py-1.5 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
      >
        &#60; Go back
      </Link>
      {movie ? (
        <div className="grid gap-x-3 gap-y-4 [grid-template-columns:minmax(342px,_auto)_1fr]">
          <MovieDetails
            to={backLinkRef.current}
            src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
            title={movie?.title}
            releaseDate={movie?.release_date.split('-')[0]}
            tagline={movie?.tagline}
            averageVote={movie?.vote_average.toFixed(1)}
            runtime={movie?.runtime}
            overview={movie?.overview}
            genres={movie?.genres.map(({ name }) => name).join(', ')}
          />
          <AdditionalInfo
            title={'Additional Information:'}
            linkToCast={'cast'}
            linkToReviews={'reviews'}
          />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetailsPage;
