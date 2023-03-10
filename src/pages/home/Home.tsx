import { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Card, Heading, Input, Logo, Modal, Text } from '../../components';
import { useStore } from '../../store';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { LoginModal, SignupModal } from './components';
import * as sc from './home.style';
import { links as data } from './mocks/links.mock';
import FirebaseAuthService from '../../firebase/FirebaseAuthService';
import { Link } from './home.interface';
import { User } from 'react-feather';

const themes = ["sweet", "mario", /*"dark",*/ "autumn", "sunset", "vintage"];

export const Home = () => {
  const store = useStore();

  const [user, setUser] = useState<any>(null);
  const [urlToShorten, setUrlToShorten] = useState<string>("");
  const [links] = useState<Link[]>(data);

  useEffect(() => {
    FirebaseAuthService.subscribeToAuthChanges(setUser);
  }, []);

  // Open signup modal when user click on "Signup" button
  const handleOpenSignupModal = (): void => {
    store.setIsSignupModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Open login modal when user click on "Login" button
  const handleOpenLoginModal = (): void => {
    store.setIsLoginModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Close modal when user click "Close" button
  const handleCloseModal = (): void => {
    store.setIsSignupModalOpen(false);
    store.setIsLoginModalOpen(false);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'unset';
  };

  // Logout user
  const handleLogout = (): void => {
    FirebaseAuthService.logoutUser();
  };

  // Create short Url when user click on "Shorten" button
  const handleShortUrl = (): void => console.log('todo');

  // Change the app theme when user clicks the logo
  const themeSwitcher = () => {
    const newIndex = store.themeIndex + 1;
    newIndex > themes.length - 1
      ? store.setThemeIndex(0)
      : store.setThemeIndex(store.themeIndex + 1);
  };

  // Update the store with the new theme
  useEffect(() => {
    store.setTheme(themes[store.themeIndex]);
  }, [store.themeIndex, store.setTheme]);

  console.log(user);
  return (
    <ThemeProvider theme={store.theme}>
      <GlobalStyle bgColor={store.theme.BODY_BACKGROUND} />
      <sc.Header theme={store.theme}>
        <Logo withBrand onClick={themeSwitcher} />
        {!user ? (
          <sc.BtnContainer>
            <Button bgColor={store.theme.SIGNUP_BTN_BACKGROUND} labelColor={store.theme.SIGNUP_BTN_LABEL} label="Signup" onClick={handleOpenSignupModal} />
            <Button bgColor={store.theme.LOGIN_BTN_BACKGROUND} labelColor={store.theme.LOGIN_BTN_LABEL} label="Login" onClick={handleOpenLoginModal} />
          </sc.BtnContainer>
        ) : (
          <sc.BtnContainer>
            {/* <Text color={store.theme.USER_EMAIL} small>{user.email}</Text> */}
            <User color={store.theme.USER_EMAIL} />
            <Button bgColor={store.theme.SIGNUP_BTN_BACKGROUND} labelColor={store.theme.SIGNUP_BTN_LABEL} label="Logout" onClick={handleLogout} />
          </sc.BtnContainer>
        )
        }
      </sc.Header>
      <sc.Main>
        <Heading level="h1">Keep your link fit!</Heading>
        <sc.Spacer size="1.25rem" />
        <sc.Subtitle>
          <Text>Start shortening your URLs today in just a few clicks and keep track your audience.</Text>
        </sc.Subtitle>
        <sc.Spacer size="2rem" />
        <sc.FormContainer>
          <Input type="url" placeholder="Past your link and make it shorter" onChange={setUrlToShorten} value={urlToShorten} />
          <Button bgColor={store.theme.SHORTEN_BTN_BACKGROUND} labelColor={store.theme.SHORTEN_BTN_LABEL} label="Shorten" scissors onClick={handleShortUrl} />
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
      <Modal isOpen={store.isSignupModalOpen} onClose={handleCloseModal} bgColor={store.theme.MODAL_SIGNUP_BACKGROUND}>
        <SignupModal />
      </Modal>
      <Modal isOpen={store.isLoginModalOpen} onClose={handleCloseModal} bgColor={store.theme.MODAL_LOGIN_BACKGROUND}>
        <LoginModal />
      </Modal>
    </ThemeProvider>
  );
};