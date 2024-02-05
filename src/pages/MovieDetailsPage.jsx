import { Suspense, useEffect, useRef, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import AdditionalInfo from 'components/Layout/Main/MovieDetails/AdditionalInfo/AdditionalInfo';
import MovieDetails from 'components/Layout/Main/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  // const [err, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    // setLoading(true);

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`movie/${movieId}`, {
          signal: controller.current,
        });
        setMovie(res.data);
        // setLoading(false);
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
  console.log(movie);

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
