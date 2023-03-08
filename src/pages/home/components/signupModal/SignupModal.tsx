import * as sc from './signupModal.style';
import { Button, Heading, Input, Text } from '../../../../components';

export const SignupModal = () => {
  return (
    <sc.Main>
      <Heading level="h1">Hey hello! 👋</Heading>
      <sc.Spacer size="1.5rem" />
      <Text>Create your account now to save and access to your links anywhere.</Text>
      <sc.Spacer size="2rem" />
      <Heading level="h2">Email</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="email" placeholder="Enter an email address" />
      <sc.Spacer size="1rem" />
      <Heading level="h2">Password</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="password" placeholder="Enter a password" />
      <sc.Spacer size="1.5rem" />
      <sc.ButtonContainer>
        <Button
          variant="secondary"
          label="Signup"
          onClick={() => console.log('Signup')}
        />
      </sc.ButtonContainer>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};