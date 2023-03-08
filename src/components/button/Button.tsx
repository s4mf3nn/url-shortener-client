import { FC } from 'react';
import { Scissors } from 'react-feather';
import * as sc from './button.style';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  label: string;
  scissors?: true;
}

export const Button: FC<ButtonProps> = ({ variant, label, scissors }) => {
  return (
    <sc.Button type="button" variant={variant}>
      {label}
      {scissors && <Scissors width={16} />}
    </sc.Button>
  );
};
