import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(film => (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Movies;
