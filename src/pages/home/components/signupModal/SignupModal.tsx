import { Button, Heading, Input, Text } from '../../../../components';
import { useStore } from '../../../../store';
import * as sc from './signupModal.style';

export const SignupModal = () => {
  const { theme } = useStore();

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
          bgColor={theme.MODAL_SIGNUP_BTN_BACKGROUND}
          labelColor={theme.MODAL_SIGNUP_BTN_LABEL}
          label="Signup"
          onClick={() => console.log('Signup')}
        />
      </sc.ButtonContainer>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};