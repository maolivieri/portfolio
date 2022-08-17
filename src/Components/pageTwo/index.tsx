import {
  PageContainer,
  Container,
  Body,
  Title,
  Content,
  Header,
  Subtitle,
  HeaderTitles,
  BodyContent,
  DowloadButton
} from './styles';

import Side from './side';

const PageTwo = ({ t }) => {
  return (
    <PageContainer>
      <Container>
        <HeaderTitles>
          <Header>{t('pageTwo.header')}</Header>
          <Title>{t('pageTwo.title')}</Title>
        </HeaderTitles>
        <Body>
          <Side />
          <BodyContent>
            <Content>{t('pageTwo.firstparagraph')}</Content>
            <div>
              <Subtitle>{t('pageTwo.subtitle')}</Subtitle>
              <Content>{t('pageTwo.secondparagraph')}</Content>
            </div>
            <DowloadButton
              target="_blank"
              href="/MatheusAguiarOlivieri_Resume2022.pdf"
            >
              {t('pageTwo.dowload')}
            </DowloadButton>
          </BodyContent>
        </Body>
      </Container>
    </PageContainer>
  );
};

export default PageTwo;
