import { FC } from 'react';
import { Scissors } from 'react-feather';
import * as sc from './button.style';

interface ButtonProps {
  bgColor: string;
  labelColor: string;
  label: string;
  scissors?: true;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ bgColor, labelColor, label, scissors, disabled, isLoading, onClick }) => {
  return (
    <sc.Button
      type="submit"
      bgColor={bgColor}
      labelColor={labelColor}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? "Loading..." : (
        <>
          {label}
          {scissors && <Scissors width={16} />}
        </>
      )}
    </sc.Button>
  );
};
