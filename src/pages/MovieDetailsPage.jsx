import { Suspense, useEffect, useRef, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  // const [err, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`movie/${movieId}`, {
          signal: controller.current,
        });
        setMovie(res.data);
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
        toCast={'cast'}
        toReviews={'reviews'}
      />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
