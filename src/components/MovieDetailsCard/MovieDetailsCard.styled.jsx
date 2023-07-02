import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Thumb = styled.div`
  height: 380px;
  max-width: 320px;
  width: 100%;

  @media screen and (min-width: 380px) {
    height: 480px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  margin-bottom: 12px;

  font-size: 28px;
  line-height: 1.5;
`;

export const UserScore = styled.p`
  display: inline-block;
  margin-bottom: 8px;

  padding: 4px 8px;

  color: ${({ theme }) => theme.colors.secondaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;

export const OverviewTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;
  line-height: 1.5;
`;

export const Overview = styled.p`
  display: inline-block;
  margin-bottom: 8px;

  padding: 4px 8px;
  max-width: 520px;

  color: ${({ theme }) => theme.colors.secondaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;

export const GenresTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 20px;
  line-height: 1.5;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  & > li {
    padding: 4px 8px;

    color: ${({ theme }) => theme.colors.secondaryText};

    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 1px solid ${({ theme }) => theme.colors.secondaryText};
    border-radius: 8px;
  }
`;
