import { useState } from 'react';
import { Button, Heading, Input, Text } from '../../../../components';
import FirebaseAuthService from '../../../../firebase/FirebaseAuthService';
import { useStore } from '../../../../store';
import * as sc from './signupModal.style';

export const SignupModal = () => {
  const { theme, setIsSignupModalOpen } = useStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Triggered when user submit the signup form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) return alert("Missing email address or password.");

    try {
      setIsLoading(true);
      await FirebaseAuthService.registerUser(email, password);
      setEmail("");
      setPassword("");
      setIsSignupModalOpen(false);
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <sc.Main>
      <Heading level="h1">Hey hello! 👋</Heading>
      <sc.Spacer size="1.5rem" />
      <Text>Create your account now to save and access to your links anywhere.</Text>
      <sc.Spacer size="2rem" />
      <form onSubmit={handleSubmit}>
        <Heading level="h2">Email</Heading>
        <sc.Spacer size=".5rem" />
        <Input type="email" placeholder="Enter an email address" onChange={setEmail} value={email} />
        <sc.Spacer size="1rem" />
        <Heading level="h2">Password</Heading>
        <sc.Spacer size=".5rem" />
        <Input type="password" placeholder="Enter a password" onChange={setPassword} value={password} />
        <sc.Spacer size="1.5rem" />
        <sc.ButtonContainer>
          <Button
            bgColor={theme.MODAL_SIGNUP_BTN_BACKGROUND}
            labelColor={theme.MODAL_SIGNUP_BTN_LABEL}
            label="Signup"
            disabled={isLoading}
            isLoading={isLoading}
          />
        </sc.ButtonContainer>
      </form>
      <sc.Spacer size="1rem" />
    </sc.Main>
  );
};