import styled from 'styled-components';

export const Card = styled.div`
  padding: 8px 12px;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;

export const Author = styled.h3`
  margin-bottom: 12px;

  font-size: 20px;
  line-height: 1.5;
`;

export const Review = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
