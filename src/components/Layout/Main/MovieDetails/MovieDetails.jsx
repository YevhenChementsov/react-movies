import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieDetails = ({
  to,
  src,
  title,
  releaseDate,
  tagline,
  averageVote,
  runtime,
  overview,
  genres,
}) => {
  return (
    <>
      <Link
        to={to}
        className="mt-4 inline-block rounded-lg border border-solid border-transparent bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
      >
        &#8920; Go back
      </Link>
      <div className="mt-2 flex pb-4 shadow-lg">
        <img className="rounded-lg" src={src} alt={title} />
        <article className="flex flex-col gap-2">
          <h2>
            <b>
              {title}
              <span>({releaseDate})</span>
            </b>
          </h2>
          <p>&#171;{tagline}&#187;</p>
          <p>
            <b>
              {averageVote}/10
              <span>{runtime} min.</span>
            </b>
          </p>
          <h3>
            <b>Overview:</b>
          </h3>
          <p>{overview}</p>
          <h3>
            <b>Genres:</b>
          </h3>
          <p>{genres}</p>
        </article>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  averageVote: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};

export default MovieDetails;
