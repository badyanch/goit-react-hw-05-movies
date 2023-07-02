import styled from 'styled-components';

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
