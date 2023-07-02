import styled from 'styled-components';

export const HideTitle = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 210px;
  row-gap: 24px;
  column-gap: 20px;
  justify-content: center;

  @media screen and (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
