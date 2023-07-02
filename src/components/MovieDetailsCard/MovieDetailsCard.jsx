import PropTypes from 'prop-types';
import * as S from './MovieDetailsCard.styled';
import defaultMoviePoster from 'images/default-movie.jpg';

const MovieDetailsCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  const userScore = Math.round(vote_average);

  return (
    <S.Container>
      <S.Thumb>
        <S.Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w400/${poster_path}`
              : defaultMoviePoster
          }
          alt={title}
        />
      </S.Thumb>

      <div>
        <S.Title>{title}</S.Title>

        <S.UserScore>User score: {userScore}</S.UserScore>

        {overview && (
          <>
            <S.OverviewTitle>Overview</S.OverviewTitle>
            <S.Overview>{overview}</S.Overview>
          </>
        )}

        <S.GenresTitle>Genres</S.GenresTitle>
        <S.GenresList>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </S.GenresList>
      </div>
    </S.Container>
  );
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.exact({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieDetailsCard;
