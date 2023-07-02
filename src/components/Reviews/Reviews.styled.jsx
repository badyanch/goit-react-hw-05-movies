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
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NotFound = styled.p`
  display: inline-block;
  padding: 4px 8px;

  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;
