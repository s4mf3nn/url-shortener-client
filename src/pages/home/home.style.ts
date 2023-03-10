import styled from 'styled-components';
import { ITheme } from '../../styles/themes/theme.interface';

export const Spacer = styled.div<{ size: string; }>`
  height: ${p => p.size};
`;

export const Header = styled.div<{ theme: ITheme; }>`
  align-items: center;
  background-color: ${p => p.theme.HEADER};
  border-bottom: 3px solid #000;
  display: flex;
  height: 78px;
  justify-content: space-between;
  padding: 0 15px;
  position: fixed;
  top: 0px;
  width: 100%;

  @media (min-width: 1200px) {
    padding: 0 36px;
  }
`;

export const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const Main = styled.div`
  margin: 160px auto 0;
  max-width: 540px;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const Subtitle = styled.div`
  margin: 0 auto;
  max-width: 360px;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 12px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const List = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;