import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${p => p.variant === 'primary'
    ? '#1663ff'
    : p.variant === 'secondary'
      ? '#f7ce22'
      : '#fff'
  };
  border: 2px solid #000;
  border-radius: 12px;
  box-shadow: 4px 4px 0px 0px #000;
  color: ${p => p.variant === 'primary' ? '#fff' : '#000'};
  cursor: pointer;
  display: flex;
  font-family: 'Poppins';
  font-size: .85rem;
  font-weight: 700;
  gap: 5px;
  height: 42px;
  justify-content: center;
  min-width: 102px;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:active {
    top: 4px;
    position: relative;
    left: 4px;
    box-shadow: none;
  }
`;