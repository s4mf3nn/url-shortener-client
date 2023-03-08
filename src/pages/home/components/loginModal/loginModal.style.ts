import styled from 'styled-components';

export const Main = styled.div`
  
`;

export const Spacer = styled.div<{ size: string; }>`
  height: ${p => p.size};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;