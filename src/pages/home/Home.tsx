import * as sc from './home.style';
import { Button, Card, Heading, Input, Logo, Text } from '../../components';

export const Home = () => {
  return (
    <>
      <sc.Header>
        <Logo withBrand />
        <sc.BtnContainer>
          <Button variant="secondary" label="Signup" />
          <Button variant="tertiary" label="Login" />
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
          <Input />
          <Button variant="primary" label="Shorten" scissors />
        </sc.FormContainer>
        <sc.Spacer size="1.25rem" />
        <Text>Shortening <b>4,601</b> URLs that have been accessed <b>80,193</b> times.</Text>
      </sc.Main>
      <sc.Spacer size="4rem" />
      <sc.List>
        <Heading level="h2">Your links</Heading>
        <sc.Spacer size="1rem" />
        <Card shortId="y6gpuN" originUrl="https://github.com/s4mf3nn" createdAt="just now" views={97} />
        <sc.Spacer size="1rem" />
        <Card shortId="5hwZx3" originUrl="https://www.linkedin.com/in/samir-fennikh" createdAt="march 5 2023 · 19:47" views={44} />
        <sc.Spacer size="1rem" />
        <Card shortId="Zr44cBk" originUrl="https://www.youtube.com/watch?v=fJ9rUzIMcZQ" createdAt="march 5 2023 · 18:11" views={28} />
        <sc.Spacer size="1rem" />
        <Card shortId="MqA67c" originUrl="https://solar-system-theta.vercel.app" createdAt="march 5 2023 · 17:44" views={21} />
        <sc.Spacer size="1rem" />
        <Card shortId="5hwZx3" originUrl="https://www.linkedin.com/in/samir-fennikh" createdAt="march 5 2023 · 19:47" views={44} />
        <sc.Spacer size="1rem" />
        <Card shortId="Zr44cBk" originUrl="https://www.youtube.com/watch?v=fJ9rUzIMcZQ" createdAt="march 5 2023 · 18:11" views={28} />
        <sc.Spacer size="1rem" />
        <Card shortId="MqA67c" originUrl="https://solar-system-theta.vercel.app" createdAt="march 5 2023 · 17:44" views={21} />
      </sc.List>
      <sc.Spacer size="3rem" />
    </>
  );
};