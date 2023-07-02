import * as S from './NotFound.styled';

const NotFound = () => (
  <S.Container>
    <S.ErrorMessage>Not Found</S.ErrorMessage>
    <S.ErrorCode>404</S.ErrorCode>
    <S.HomePageLink to="/">Home page</S.HomePageLink>
  </S.Container>
);

export default NotFound;
