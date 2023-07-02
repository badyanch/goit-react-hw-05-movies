import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1360px;
  min-width: 310px;
`;

export const Header = styled.header`
  position: sticky;
  z-index: 50;
  top: 0;

  padding: 20px 8px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryText};
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 12px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  border-radius: 8px;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
