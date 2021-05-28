import { Container, Body, Title, Content, Header } from './styles';

const PageThree = ({ t }) => {
  return (
    <Container>
      <Body>
        <Header>Page 3 Header</Header>
        <Title>PAGE 3</Title>
        {/* <Header>{t('pageOne.header')}</Header> */}
        {/* <Title>{t('pageOne.title')}</Title> */}
        {/* <Content>{t('pageOne.content')}</Content> */}
      </Body>
    </Container>
  );
};

export default PageThree;
