import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 4px 8px;
  max-width: 320px;
  width: 100%;

  color: ${({ theme }) => theme.colors.primaryText};

  border: 3px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
  outline: none;

  cursor: pointer;

  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondaryBg};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 0;

  margin-top: 4px;
  padding: 8px;
  width: 100%;

  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};

  background-color: #fafab5;
  border: 1px solid #e3e342;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 4px 8px;

  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;

  cursor: pointer;

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
