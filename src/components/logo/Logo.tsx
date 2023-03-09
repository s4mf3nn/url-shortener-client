import { FC } from 'react';
import { Scissors } from 'react-feather';
import { useStore } from '../../store';
import * as sc from './logo.style';

interface LogoProps {
  withBrand: boolean;
  onClick?: () => void;
}

export const Logo: FC<LogoProps> = ({ withBrand, onClick }) => {
  const { theme } = useStore();

  return (
    <sc.Wrapper>
      <sc.Logo theme={theme} onClick={onClick}>
        <Scissors width={24} />
      </sc.Logo>
      {withBrand && <sc.Brand theme={theme}>Fiii.it</sc.Brand>}
    </sc.Wrapper>
  );
};
