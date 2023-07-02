import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as S from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <S.List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <S.LinkToDetails to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </S.LinkToDetails>
        </li>
      ))}
    </S.List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
