import { useEffect, useState } from 'react';

import axiosInstance from 'api/tmdbApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`movie/${movieId}/reviews`, {
          signal: controller.current,
        });
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);
  console.log(reviews);
  return (
    <>
      {reviews?.results.length > 1 ? (
        <ul className="mt-4 flex flex-col gap-4 [grid-area:4/1/5/3]">
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
      )}
    </>
  );
};

export default Reviews;
