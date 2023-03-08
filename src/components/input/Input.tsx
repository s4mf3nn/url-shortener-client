import { FC } from 'react';
import * as sc from './input.style';

interface InputProps {
  type: 'text' | 'email' | 'url' | 'password';
  placeholder: string;
}
export const Input: FC<InputProps> = ({ type, placeholder }) => {
  return (
    <sc.Input
      type={type}
      placeholder={placeholder}
    />
  );
};
