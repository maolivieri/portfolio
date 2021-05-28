import { Container, Body, Title, Content, Header } from './styles';

const PageTwo = ({ t }) => {
  return (
    <Container>
      <Body>
        <Header>Page 2 Header</Header>
        <Title>PAGE 2</Title>
        {/* <Header>{t('pageOne.header')}</Header>
        <Title>{t('pageOne.title')}</Title>
        <Content>{t('pageOne.content')}</Content> */}
      </Body>
    </Container>
  );
};

export default PageTwo;
