import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import { Status } from 'constants';
import CastCard from 'components/CastCard/CastCard';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setStatus(Status.PENDING);

        const { cast } = await moviesAPI.getMovieCredits(movieId);

        const newCast = cast.map(({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        }));

        setCast(newCast);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchCast();
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
        <S.HideTitle>Cast</S.HideTitle>
        <S.List>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <CastCard
                name={name}
                character={character}
                avatar={profile_path}
              />
            </li>
          ))}
        </S.List>
      </>
    );
  }
};

export default Cast;
