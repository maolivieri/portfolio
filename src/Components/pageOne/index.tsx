import { Container, Body, Title, Content, Header } from './styles';

import Side from './side';
import { CircularDetail } from './circularDetail';

const PageOne = ({ t }) => {
  return (
    <Container>
      <Side />
      <Body>
        <Header>{t('pageOne.header')}</Header>
        <Title>{t('pageOne.title')}</Title>
        <Content>{t('pageOne.content')}</Content>
      </Body>
      <CircularDetail page={1} />
    </Container>
  );
};

export default PageOne;
