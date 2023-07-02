import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import { Status } from 'constants';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const isNotFound = reviews.length === 0;

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setStatus(Status.PENDING);

        const { results } = await moviesAPI.getMovieReviews(movieId);

        const newReviews = results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        setReviews(newReviews);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (status === Status.IDLE) {
    return <></>;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorMessage errorText={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <S.HideTitle>Reviews</S.HideTitle>
        {isNotFound ? (
          <S.NotFound>We don`t have any reviews for this movie.</S.NotFound>
        ) : (
          <S.List>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <ReviewCard author={author} review={content} />
              </li>
            ))}
          </S.List>
        )}
      </>
    );
  }
};

export default Reviews;
