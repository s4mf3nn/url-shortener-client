import styled from 'styled-components';

export const Main = styled.div`
  
`;

export const Spacer = styled.div<{ size: string; }>`
  height: ${p => p.size};
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const AltButton = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;