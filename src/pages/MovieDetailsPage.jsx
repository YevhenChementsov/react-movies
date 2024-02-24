import { Suspense, useRef } from 'react';

import axiosInstance from 'api/tmdbApi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import useAxios from 'hooks/useAxios';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { yearFromDate } from 'utils/yearFromDate';
import { movieGenres } from 'utils/movieGenres';
import { averageVote } from 'utils/averageVote';

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
        className="inline-grid rounded-lg border border-solid border-transparent bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
      >
        &#60; Go back
      </Link>
      {movie ? (
        <div className="mt-4 grid gap-x-4 gap-y-3 md:[grid-template-columns:342px_1fr]">
          <MovieDetails
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            title={movie?.title}
            releaseDate={yearFromDate(movie?.release_date)}
            tagline={movie?.tagline}
            averageVote={averageVote(movie?.vote_average)}
            runtime={movie?.runtime}
            overview={movie?.overview}
            genres={movieGenres(movie?.genres)}
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
