import { FC, useState } from 'react';
import { Button, Heading, Input, Text } from '../../../../components';
import FirebaseAuthService from '../../../../firebase/FirebaseAuthService';
import { useStore } from '../../../../store';
import { ILoginModalProps } from './loginModal.interface';
import * as sc from './loginModal.style';

export const LoginModal: FC<ILoginModalProps> = ({ user }) => {
  const { theme } = useStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isForgotPanelOpen, setIsForgotPanelOpen] = useState<boolean>(false);

  // Switch between login and forgot password panels
  const toggleForgotPanel = (): void => setIsForgotPanelOpen(!isForgotPanelOpen);

  // Triggered when user submit the login form
  const handleSubmitLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      await FirebaseAuthService.registerUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  if (isForgotPanelOpen) {
    return (
      <sc.Main>
        <Heading level="h1">Forgot password?</Heading>
        <sc.Spacer size="1.5rem" />
        <Text>No worries, we'll send you reset instructions.</Text>
        <sc.Spacer size="2rem" />
        <Heading level="h2">Email</Heading>
        <sc.Spacer size=".5rem" />
        <Input type="email" placeholder="Enter your email address" />
        <sc.Spacer size="1.5rem" />
        <sc.ButtonContainer>
          <sc.AltButton onClick={toggleForgotPanel}>
            Back to login
          </sc.AltButton>
          <Button
            bgColor={theme.MODAL_LOGIN_BTN_BACKGROUND}
            labelColor={theme.MODAL_LOGIN_BTN_LABEL}
            label="Send"
            onClick={() => console.log('password reset')}
          />
        </sc.ButtonContainer>
        <sc.Spacer size="1rem" />
      </sc.Main>
    );
  }

  return (
    <sc.Main>
      <Heading level="h1">Welcome back!</Heading>
      <sc.Spacer size="2rem" />
      <Heading level="h2">Email</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="email" placeholder="Enter your email address" />
      <sc.Spacer size="1rem" />
      <Heading level="h2">Password</Heading>
      <sc.Spacer size=".5rem" />
      <Input type="password" placeholder="Enter your password" />
      <sc.Spacer size="1.5rem" />
      <sc.ButtonContainer>
        <sc.AltButton onClick={toggleForgotPanel}>
          Forgot Password ?
        </sc.AltButton>
        <Button
          bgColor={theme.MODAL_LOGIN_BTN_BACKGROUND}
          labelColor={theme.MODAL_LOGIN_BTN_LABEL}
          label="Login"
          onClick={() => console.log('login')}
        />
      </sc.ButtonContainer>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};