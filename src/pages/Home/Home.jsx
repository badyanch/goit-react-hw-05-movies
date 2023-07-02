import { useState, useEffect } from 'react';
import * as moviesAPI from 'services';
import { Status } from 'constants';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setStatus(Status.PENDING);

        const { results } = await moviesAPI.getTrending();

        const newMovies = results.map(({ id, title }) => ({ id, title }));

        setMovies(newMovies);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchTrending();
  }, []);

  if (status === Status.IDLE) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
        </section>
      </main>
    );
  }

  if (status === Status.PENDING) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <Loader />
        </section>
      </main>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <ErrorMessage errorText={error.message} />
        </section>
      </main>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <MoviesList movies={movies} />
        </section>
      </main>
    );
  }
};

export default Home;
