import axiosInstance from 'api/tmdbApi';
import Loader from 'components/Loader/Loader';
import useAxios from 'hooks/useAxios';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useAxios({
    axiosInstance,
    url: `movie/${movieId}/reviews`,
  });

  return (
    <div className="md:[grid-area:3/1/4/3]">
      {reviews ? (
        reviews?.results.length > 1 ? (
          <ul className="flex flex-col gap-4">
            {reviews.results.map(
              ({ author, content, updated_at, id }) =>
                author && (
                  <li key={id} className="flex flex-col gap-2">
                    <h3>
                      <b>{author}</b>
                    </h3>
                    <q>{content}</q>
                    <em className="flex justify-end">
                      Last update: {updated_at.slice(0, 10)}
                    </em>
                  </li>
                ),
            )}
          </ul>
        ) : (
          <p className="mt-4 [grid-area:4/1/5/3]">
            Sorry, we don&apos;t have any reviews for this movie now.
          </p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Reviews;
