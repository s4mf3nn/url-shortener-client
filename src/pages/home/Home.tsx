import { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Card, Heading, Input, Logo, Modal, Text } from '../../components';
import { useStore } from '../../store';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { LoginModal, SignupModal } from './components';
import * as sc from './home.style';
import { links as data } from './mocks/links.mock';
// import firebase from '../../FirebaseConfig';

interface Link {
  shortId: string;
  originUrl: string;
  createdAt: string;
  views: number;
}

const themes = ["sweet", "mario", "nintendo", "beach", "autumn", "sunset", "vintage"];

export const Home = () => {
  const { theme, themeIndex, setThemeIndex, changeTheme } = useStore();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [links] = useState<Link[]>(data);

  // Open signup modal when user click on "Signup" button
  const handleOpenSignupModal = (): void => {
    setIsSignupModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Open login modal when user click on "Login" button
  const handleOpenLoginModal = (): void => {
    setIsLoginModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Close modal when user click "Close" button
  const handleCloseModal = (): void => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(false);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'unset';
  };

  // Create short Url when user click on "Shorten" button
  const handleShortUrl = (): void => console.log('todo');

  // Change the app theme when user clicks the logo
  const themeSwitcher = () => {
    const newIndex = themeIndex + 1;
    newIndex > themes.length - 1
      ? setThemeIndex(0)
      : setThemeIndex(themeIndex + 1);
  };

  // Update the store with the new theme
  useEffect(() => {
    changeTheme(themes[themeIndex]);
  }, [themeIndex, changeTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle bgColor={theme.BODY_BACKGROUND} />
      <sc.Header theme={theme}>
        <Logo withBrand onClick={themeSwitcher} />
        <sc.BtnContainer>
          <Button bgColor={theme.SIGNUP_BTN_BACKGROUND} labelColor={theme.SIGNUP_BTN_LABEL} label="Signup" onClick={handleOpenSignupModal} />
          <Button bgColor={theme.LOGIN_BTN_BACKGROUND} labelColor={theme.LOGIN_BTN_LABEL} label="Login" onClick={handleOpenLoginModal} />
        </sc.BtnContainer>
      </sc.Header>
      <sc.Main>
        <Heading level="h1">Keep your link fit!</Heading>
        <sc.Spacer size="1.25rem" />
        <sc.Subtitle>
          <Text>Start shortening your URLs today in just a few clicks and keep track your audience.</Text>
        </sc.Subtitle>
        <sc.Spacer size="2rem" />
        <sc.FormContainer>
          <Input type="url" placeholder="Past your link and make it shorter" />
          <Button bgColor={theme.SHORTEN_BTN_BACKGROUND} labelColor={theme.SHORTEN_BTN_LABEL} label="Shorten" scissors onClick={handleShortUrl} />
        </sc.FormContainer>
        <sc.Spacer size="1.25rem" />
        <Text>Shortening <b>4,601</b> URLs that have been accessed <b>80,193</b> times.</Text>
      </sc.Main>
      <sc.Spacer size="4rem" />
      <sc.List>
        <Heading level="h2">Your links</Heading>
        {links?.map((link: Link) => {
          return (
            <Fragment key={link.shortId}>
              <sc.Spacer size="1rem" />
              <Card shortId={link.shortId} originUrl={link.originUrl} createdAt={link.createdAt} views={link.views} />
            </Fragment>
          );
        })}
      </sc.List>
      <sc.Spacer size="3rem" />
      <Modal isOpen={isSignupModalOpen} onClose={handleCloseModal} bgColor={theme.MODAL_SIGNUP_BACKGROUND}>
        <SignupModal />
      </Modal>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal} bgColor={theme.MODAL_LOGIN_BACKGROUND}>
        <LoginModal />
      </Modal>
    </ThemeProvider>
  );
};