import PropTypes from 'prop-types';

const MovieDetails = ({
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
      <div className="[grid-area:2/1/3/2]">
        <img className="rounded-lg" src={src} alt={title} />
      </div>
      <article className="flex flex-col gap-2 [grid-area:2/2/3/3]">
        <h2 className="flex gap-1 font-bold">
          {title} ({releaseDate})
        </h2>
        {tagline ? <p>&#171;{tagline}&#187;</p> : null}
        <h3>
          <b>Runtime:</b> {runtime} min.
        </h3>
        <h3>
          <b>Overview:</b>
        </h3>
        <p>{overview}</p>
        <h3>
          <b>Genres:</b> <span>{genres}</span>
        </h3>
        <h3>
          <b>Rating:</b>{' '}
          {averageVote > 0 ? averageVote + '/10' : 'No grades yet'}
        </h3>
      </article>
    </>
  );
};

MovieDetails.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  tagline: PropTypes.string,
  averageVote: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieDetails;
