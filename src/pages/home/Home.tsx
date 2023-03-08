import { Fragment, Key, useState } from 'react';
import { Button, Card, Heading, Input, Logo, Modal, Text } from '../../components';
import { LoginModal, SignupModal } from './components';
import * as sc from './home.style';

interface Link {
  shortId: string;
  originUrl: string;
  createdAt: string;
  views: number;
}

export const Home = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<Link[]>([
    {
      shortId: "y6gpuN",
      originUrl: "https://github.com/s4mf3nn",
      createdAt: "just now",
      views: 97,
    },
    {
      shortId: "5hwZx3",
      originUrl: "https://www.linkedin.com/in/samir-fennikh",
      createdAt: "march 5 2023 · 19:47",
      views: 44,
    },
    {
      shortId: "Zr44cBk",
      originUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      createdAt: "march 5 2023 · 18:11",
      views: 28,
    },
    {
      shortId: "MqA67c",
      originUrl: "https://solar-system-theta.vercel.app",
      createdAt: "march 5 2023 · 17:44",
      views: 21,
    }
  ]);

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
    document.body.style.overflow = 'unset';
  };

  // Create short Url when user click on "Shorten" button
  const handleShortUrl = (): void => console.log('todo');

  return (
    <>
      <sc.Header>
        <Logo withBrand />
        <sc.BtnContainer>
          <Button variant="secondary" label="Signup" onClick={handleOpenSignupModal} />
          <Button variant="tertiary" label="Login" onClick={handleOpenLoginModal} />
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
          <Button variant="primary" label="Shorten" scissors onClick={handleShortUrl} />
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
      <Modal isOpen={isSignupModalOpen} onClose={handleCloseModal} bgColor="#a276fe">
        <SignupModal />
      </Modal>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal} bgColor="#ff5151">
        <LoginModal />
      </Modal>
    </>
  );
};