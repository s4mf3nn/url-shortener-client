import { FC } from 'react';
import { Scissors } from 'react-feather';
import * as sc from './logo.style';

interface LogoProps {
  withBrand: boolean;
}

export const Logo: FC<LogoProps> = ({ withBrand }) => {
  return (
    <sc.Wrapper>
      <sc.Logo>
        <Scissors width={24} />
      </sc.Logo>
      {withBrand && <sc.Brand>Fiii.it</sc.Brand>}
    </sc.Wrapper>
  );
};
