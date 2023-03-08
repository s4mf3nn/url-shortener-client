import styled from 'styled-components';

export const Wrapper = styled.div<{ isOpen: boolean; }>`
  align-items: center;
  background-color: transparent;
  display: ${p => p.isOpen ? 'flex' : 'none'};
  height: 100vh;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
`;

export const Modal = styled.div<{ bgColor: string; }>`
  background-color: ${p => p.bgColor};
  border: 2px solid #000;
  border-radius: 12px;
  box-shadow: 4px 4px 0px 0px #000;
  padding: 15px;
  width: 450px;

  @media (max-width: 1200px) {
    border: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Close = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
`;

export const Main = styled.div`
  padding: 15px;
`;