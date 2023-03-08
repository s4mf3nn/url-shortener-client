import * as sc from './loginModal.style';
import { Button, Heading, Input, Text } from '../../../../components';

export const LoginModal = () => {
  return (
    <sc.Main>
      <Heading level="h1">Welcome back!</Heading>
      <sc.Spacer size="2rem" />
      <Heading level="h2">Email address</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="email" placeholder="Email address" />
      <sc.Spacer size="1rem" />
      <Heading level="h2">Password</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="password" placeholder="Password" />
      <sc.Spacer size="1.5rem" />
      <sc.ButtonContainer>
        <Button
          variant="secondary"
          label="Login"
          onClick={() => console.log('Signup')}
        />
      </sc.ButtonContainer>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};