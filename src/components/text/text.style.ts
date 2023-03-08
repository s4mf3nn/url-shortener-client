import styled from 'styled-components';

interface TextProps {
  color?: string;
  ellipsis?: boolean;
  bold?: boolean;
  small?: boolean;
  large?: boolean;
}

export const Text = styled.span<TextProps>`
  color: ${p => p.color ? p.color : '#000'};
  display: inherit;
  font-family: 'Poppins';
  font-size: ${p => p.small ? '.85rem' : p.large ? '1.15rem' : '.9rem'};
  font-weight: ${p => p.bold ? '700' : '500'};
  margin: 0;
  overflow: ${p => p.ellipsis ? 'hidden' : 'none'};
  white-space: ${p => p.ellipsis ? 'nowrap' : 'pre-wrap'};
  text-overflow: ${p => p.ellipsis ? 'ellipsis' : 'none'};
`;