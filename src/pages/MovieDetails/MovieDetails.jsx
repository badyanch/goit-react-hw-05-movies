import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import * as moviesAPI from 'services';
import { Status } from 'constants';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(Status.PENDING);

        const { poster_path, title, vote_average, overview, genres } =
          await moviesAPI.getMovieDetails(movieId);

        setMovieDetails({
          poster_path,
          title,
          vote_average,
          overview,
          genres,
        });
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (status === Status.IDLE) {
    return <main></main>;
  }

  if (status === Status.PENDING) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <main>
        <section>
          <ErrorMessage errorText={error.message} />
        </section>
      </main>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <main>
        <section>
          <S.GoBackLink to={backLinkLocationRef.current}>
            <HiArrowNarrowLeft />
            Go back
          </S.GoBackLink>
        </section>
        <section>
          <MovieDetailsCard movieDetails={movieDetails} />
        </section>
        <S.Section>
          <S.Title>Additional information</S.Title>

          <S.LinksList>
            <li>
              <S.LinkToAddInfo to="cast">Cast</S.LinkToAddInfo>
            </li>
            <li>
              <S.LinkToAddInfo to="reviews">Reviews</S.LinkToAddInfo>
            </li>
          </S.LinksList>
        </S.Section>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    );
  }
};

export default MovieDetails;
