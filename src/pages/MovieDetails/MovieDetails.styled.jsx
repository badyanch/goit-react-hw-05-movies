import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;

  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
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

export const Title = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;
  line-height: 1.5;
`;

export const Section = styled.section`
  border-top: 2px solid ${({ theme }) => theme.colors.primaryText};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryText};
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LinkToAddInfo = styled(NavLink)`
  display: inline-block;
  padding: 4px 8px;

  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  border-radius: 8px;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
