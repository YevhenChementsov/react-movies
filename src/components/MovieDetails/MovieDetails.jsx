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
      <div className="md:[grid-area:1/1/2/2]">
        <img className="rounded-lg" src={src} alt={title} />
      </div>
      <article className="flex flex-col gap-2 md:[grid-area:1/2/2/3]">
        <h2 className="text-center text-lg font-bold md:text-start">
          {title}&nbsp;
          <span>({releaseDate})</span>
        </h2>
        {tagline ? (
          <i className="text-center indent-4 md:text-start">
            &#171;{tagline}&#187;
          </i>
        ) : null}
        <h3 className="font-bold">
          Runtime: <span className="font-normal italic">{runtime} min.</span>
        </h3>
        <h3 className="font-bold">Overview:</h3>
        <p className="indent-4 italic">{overview}</p>
        <h3 className="font-bold">
          Genres: <span className="font-normal italic">{genres}</span>
        </h3>
        <h3 className="font-bold">
          Rating: <span className="font-normal italic">{averageVote}</span>
        </h3>
      </article>
    </>
  );
};

MovieDetails.propTypes = {
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
