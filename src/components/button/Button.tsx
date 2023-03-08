import { FC } from 'react';
import { Scissors } from 'react-feather';
import * as sc from './button.style';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  label: string;
  scissors?: true;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ variant, label, scissors, onClick }) => {
  return (
    <sc.Button type="button" variant={variant} onClick={onClick}>
      {label}
      {scissors && <Scissors width={16} />}
    </sc.Button>
  );
};
