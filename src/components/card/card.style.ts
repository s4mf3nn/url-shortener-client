import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Copy = styled.button`
  align-items: center;
  background-color: #ff5151;
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

export const View = styled.div`
  align-items: center;
  background-color: #f7ce22;
  border: 2px solid #000;
  border-radius: 9px;
  display: flex;
  font-family: 'Poppins';
  font-size: .85rem;
  font-weight: 700;
  gap: 4px;
  padding: 0 8px;
  height: 36px;
  justify-content: center;
`;