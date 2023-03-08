import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const Logo = styled.button`
  align-items: center;
  background-color: #ff5151;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 3px 4px 0px 0px #000;
  color: #000;
  cursor: pointer;
  display: flex;
  height: 37px;
  justify-content: center;
  width: 37px;

  &:active {
    top: 4px;
    position: relative;
    left: 4px;
    box-shadow: none;
  }
`;

export const Brand = styled.span`
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 700;
  margin-top: 2px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;