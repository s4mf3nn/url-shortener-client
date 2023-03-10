import { FC, Fragment } from 'react';
import { User } from 'react-feather';
import { ThemeProvider } from 'styled-components';
import { Button, Card, Heading, Input, Logo, Modal, Text } from '../../components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { LoginModal, SignupModal } from './components';
import { Link, HomeViewProps } from './home.interface';
import * as sc from './home.style';

export const View: FC<HomeViewProps> = ({ user,
  links,
  store,
  originUrl,
  setOriginUrl,
  handleOpenSignupModal,
  handleOpenLoginModal,
  handleCloseModal,
  handleLogout,
  handleSubmitUrl,
  themeSwitcher,
  isLoadingAuth, }) => {

  return (
    <ThemeProvider theme={store.theme}>
      <GlobalStyle bgColor={store.theme.BODY_BACKGROUND} />
      {/* HEADER */}
      <sc.Header theme={store.theme}>
        <Logo withBrand onClick={themeSwitcher} />
        {!isLoadingAuth &&
          !user ? (
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
        {/* SHORTEN INPUT */}
        <Heading level="h1">Keep your link fit!</Heading>
        <sc.Spacer size="1.25rem" />
        <sc.Subtitle>
          <Text>Start shortening your URLs today in just a few clicks and keep track your audience.</Text>
        </sc.Subtitle>
        <sc.Spacer size="2rem" />
        <sc.FormContainer onSubmit={handleSubmitUrl}>
          <Input type="url" placeholder="Past your link and make it shorter" onChange={setOriginUrl} value={originUrl} />
          <Button bgColor={store.theme.SHORTEN_BTN_BACKGROUND} labelColor={store.theme.SHORTEN_BTN_LABEL} label="Shorten" scissors disabled={!originUrl} />
        </sc.FormContainer>
        <sc.Spacer size="1.25rem" />
        <Text>Shortening <b>4,601</b> URLs that have been accessed <b>80,193</b> times.</Text>
      </sc.Main>
      <sc.Spacer size="4rem" />
      {/* LINKS LIST */}
      {links?.length &&
        <sc.List>
          <Heading level="h2">{links.length > 1 ? 'Your links' : 'Your link'}</Heading>
          {links?.map((link: Link) => {
            return (
              <Fragment key={link.shortId}>
                <sc.Spacer size="1rem" />
                <Card shortId={link.shortId} originUrl={link.originUrl} createdAt={link.createdAt} views={link.views} />
              </Fragment>
            );
          })}
        </sc.List>
      }
      <sc.Spacer size="3rem" />
      {/* MODALS */}
      <Modal isOpen={store.isSignupModalOpen} onClose={handleCloseModal} bgColor={store.theme.MODAL_SIGNUP_BACKGROUND}>
        <SignupModal />
      </Modal>
      <Modal isOpen={store.isLoginModalOpen} onClose={handleCloseModal} bgColor={store.theme.MODAL_LOGIN_BACKGROUND}>
        <LoginModal />
      </Modal>
    </ThemeProvider>
  );
};