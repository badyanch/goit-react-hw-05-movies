import PropTypes from 'prop-types';
import * as S from './ErrorMessage.styled';

const ErrorMessage = ({ errorText }) => (
  <S.Container>
    <S.ErrorText>{errorText}</S.ErrorText>
  </S.Container>
);

ErrorMessage.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorMessage;
