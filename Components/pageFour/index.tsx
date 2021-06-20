import { Container, Header, Body, HeaderTitle, Title } from './styles';

const PageFour = ({ t }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>{t('pageFour.header')}</HeaderTitle>
        <Title>{t('pageFour.title')}</Title>
      </Header>
      <Body>AAA</Body>
    </Container>
  );
};

export default PageFour;
