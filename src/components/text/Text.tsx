import { FC, ReactNode } from 'react';
import * as sc from './text.style';

interface TextProps {
  color?: string;
  ellipsis?: boolean;
  bold?: boolean;
  small?: boolean;
  large?: boolean;
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ color, ellipsis, bold, small, large, children }) => {
  return (
    <sc.Text
      color={color}
      ellipsis={ellipsis}
      bold={bold}
      small={small}
      large={large}
    >
      {children}
    </sc.Text>
  );
};
