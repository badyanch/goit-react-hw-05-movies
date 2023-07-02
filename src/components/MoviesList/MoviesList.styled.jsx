import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkToDetails = styled(Link)`
  display: block;
  padding: 4px 8px;
  max-width: 520px;

  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;

  transition: color
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`},
    background-color
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
