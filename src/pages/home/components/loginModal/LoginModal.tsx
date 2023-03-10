import { useState } from 'react';
import { Button, Heading, Input, Text } from '../../../../components';
import FirebaseAuthService from '../../../../firebase/FirebaseAuthService';
import { useStore } from '../../../../store';
import * as sc from './loginModal.style';

export const LoginModal = () => {
  const { theme, setIsLoginModalOpen } = useStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isForgotPanelOpen, setIsForgotPanelOpen] = useState<boolean>(false);

  // Switch between login and forgot password panels
  const toggleForgotPanel = (): void => setIsForgotPanelOpen(!isForgotPanelOpen);

  // Triggered when user submit the login form
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await FirebaseAuthService.loginUser(email, password);
      setEmail("");
      setPassword("");
      setIsLoginModalOpen(false);
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  // Triggered when user submit the login form
  const handleForgotPwdSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await FirebaseAuthService.sendPasswordResetEmail(email);
      setEmail("");
      setIsForgotPanelOpen(false);
      setIsLoginModalOpen(false);
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
        <form onSubmit={handleForgotPwdSubmit}>
          <Heading level="h2">Email</Heading>
          <sc.Spacer size=".5rem" />
          <Input type="email" placeholder="Enter your email address" onChange={setEmail} value={email} />
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
        </form>
        <sc.Spacer size="1rem" />
      </sc.Main>
    );
  }

  return (
    <sc.Main>
      <Heading level="h1">Welcome back!</Heading>
      <sc.Spacer size="2rem" />
      <form onSubmit={handleSubmit}>
        <Heading level="h2">Email</Heading>
        <sc.Spacer size=".5rem" />
        <Input type="email" placeholder="Enter your email address" onChange={setEmail} value={email} />
        <sc.Spacer size="1rem" />
        <Heading level="h2">Password</Heading>
        <sc.Spacer size=".5rem" />
        <Input type="password" placeholder="Enter your password" onChange={setPassword} value={password} />
        <sc.Spacer size="1.5rem" />
        <sc.ButtonContainer>
          <sc.AltButton onClick={toggleForgotPanel}>
            Forgot Password ?
          </sc.AltButton>
          <Button
            bgColor={theme.MODAL_LOGIN_BTN_BACKGROUND}
            labelColor={theme.MODAL_LOGIN_BTN_LABEL}
            label="Login"
          />
        </sc.ButtonContainer>
      </form>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};