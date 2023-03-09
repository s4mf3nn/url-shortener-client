import styled from 'styled-components';
import { ITheme } from '../../styles/themes/theme.interface';

export const Wrapper = styled.div<{ bgColor: string; }>`
  background-color: ${p => p.bgColor};
  border: 2px solid #000;
  border-radius: 12px;
  box-shadow: 4px 4px 0px 0px #000;
  font-family: 'Poppins';
  padding: 14px 12px;
  text-decoration: none;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ShortUrl = styled.div`
  display: flex;
`;

export const Spacer = styled.div<{ size: string; }>`
  height: ${p => p.size};
`;

export const CreatedAt = styled.div`
  align-items: center;
  display: flex;
  gap: 5px;
`;

export const Side = styled.div`
  display: flex;
  gap: 8px;
`;

export const Copy = styled.button<{ theme: ITheme; }>`
  align-items: center;
  background-color: ${p => p.theme.COPY_BTN_BACKGROUND};
  border: 2px solid #000;
  border-radius: 9px;
  color: #000;
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  width: 36px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }
`;

export const View = styled.div<{ theme: ITheme; }>`
  align-items: center;
  background-color: ${p => p.theme.VIEWS_BTN_BACKGROUND};
  border: 2px solid #000;
  border-radius: 9px;
  color: ${p => p.theme.VIEWS_BTN_LABEL};
  display: flex;
  font-family: 'Poppins';
  font-size: .85rem;
  font-weight: 700;
  gap: 4px;
  padding: 0 8px;
  height: 36px;
  justify-content: center;
`;