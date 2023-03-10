import { FC } from 'react';
import * as sc from './input.style';

interface InputProps {
  type: 'text' | 'email' | 'url' | 'password';
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}
export const Input: FC<InputProps> = ({ type, placeholder, onChange, value }) => {
  return (
    <sc.Input
      type={type}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );
};
