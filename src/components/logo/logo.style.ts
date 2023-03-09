import styled from 'styled-components';
import { ITheme } from '../../styles/themes/theme.interface';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const Logo = styled.button<{ theme: ITheme; }>`
  align-items: center;
  background-color: ${p => p.theme.LOGO_BACKGROUND};
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 3px 4px 0px 0px #000;
  color: ${p => p.theme.LOGO_ICON};
  cursor: pointer;
  display: flex;
  height: 37px;
  justify-content: center;
  width: 37px;
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

export const Brand = styled.span<{ theme: ITheme; }>`
  color: ${p => p.theme.BRAND};
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 700;
  margin-top: 2px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 400px) {
    display: none;
  }
`;