import PropTypes from 'prop-types';
import * as S from './CastCard.styled';
import defaultAvatar from 'images/default_avatar.jpg';

const CastCard = ({ name, character, avatar }) => (
  <S.Card>
    <S.Thumb>
      <S.Image
        src={
          avatar ? `https://image.tmdb.org/t/p/w400/${avatar}` : defaultAvatar
        }
        alt={name}
        loading="lazy"
      />
    </S.Thumb>
    <S.TextBox>
      <S.PersonName>{name}</S.PersonName>
      <S.Character>Character: {character}</S.Character>
    </S.TextBox>
  </S.Card>
);

CastCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default CastCard;
