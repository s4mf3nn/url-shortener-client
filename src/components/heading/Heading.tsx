import { FC } from 'react';
import * as sc from './heading.style';

interface HeadingProps {
  level: 'h1' | 'h2';
  children: string;
}

export const Heading: FC<HeadingProps> = ({ level, children }) => {
  if (level === 'h1') {
    return (
      <sc.Heading1>{children}</sc.Heading1>
    );
  }

  return (
    <sc.Heading2>{children}</sc.Heading2>
  );
};
