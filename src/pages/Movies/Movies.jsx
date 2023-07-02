import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import { Status } from 'constants';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const isNotFound = movies.length === 0 && query.length !== 0;

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchMovies = async () => {
      try {
        setStatus(Status.PENDING);

        const { results } = await moviesAPI.searchMoviesByQuery(query);

        const newMovies = results.map(({ id, title }) => ({ id, title }));

        setMovies(newMovies);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    const normalizedQuery = newQuery.trim();
    setSearchParams({ query: normalizedQuery });
    setError(null);
  };

  if (status === Status.IDLE) {
    return (
      <main>
        <section>
          <SearchMovies onSubmit={handleSubmit} />
        </section>
      </main>
    );
  }

  if (status === Status.PENDING) {
    return (
      <main>
        <section>
          <SearchMovies onSubmit={handleSubmit} />
        </section>
        <section>
          <Loader />
        </section>
      </main>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <main>
        <section>
          <SearchMovies onSubmit={handleSubmit} />
        </section>
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
          <SearchMovies onSubmit={handleSubmit} />
        </section>
        <section>
          {isNotFound ? (
            <S.NotFound>Nothing found for query {query}</S.NotFound>
          ) : (
            <MoviesList movies={movies} />
          )}
        </section>
      </main>
    );
  }
};

export default Movies;
