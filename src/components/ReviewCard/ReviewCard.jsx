import PropTypes from 'prop-types';
import * as S from './ReviewCard.styled';

const ReviewCard = ({ author, review }) => (
  <S.Card>
    <S.Author>Author: {author}</S.Author>
    <S.Review>{review}</S.Review>
  </S.Card>
);

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard;
