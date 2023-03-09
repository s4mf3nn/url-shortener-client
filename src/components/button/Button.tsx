import { FC } from 'react';
import { Scissors } from 'react-feather';
import * as sc from './button.style';

interface ButtonProps {
  bgColor: string;
  labelColor: string;
  label: string;
  scissors?: true;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ bgColor, labelColor, label, scissors, onClick }) => {
  return (
    <sc.Button type="button" bgColor={bgColor} labelColor={labelColor} onClick={onClick}>
      {label}
      {scissors && <Scissors width={16} />}
    </sc.Button>
  );
};
