import { Container, TextBody, Techs, Header, Title, Content } from './styles';
import TechRow from './TechRow';

const PageThree = ({ t }) => {
  return (
    <Container>
      <Techs>
        <TechRow
          title="Front-End"
          subtitle="Sed ut perspiciatis."
          iconsArray={[
            '/icons/techs/react.png',
            `/icons/techs/css.png`,
            `/icons/techs/redux.png`,
            `/icons/techs/gatsby.png`,
            `/icons/techs/next.png`,
            `/icons/techs/jest.png`,
            `/icons/techs/html5.png`
          ]}
        />
        <TechRow
          title="Mobile App"
          subtitle="Sed ut perspiciatis unde omnis iste natus."
          iconsArray={[
            '/icons/techs/reactnative.png',
            '/icons/techs/expo.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png'
          ]}
        />
        <TechRow
          title="Back-End"
          subtitle="Sed ut perspiciatis unde omnis iste natus."
          iconsArray={[
            '/icons/techs/postgres.png',
            '/icons/techs/node.png',
            '/icons/techs/django.png',
            '/icons/techs/prisma.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png'
          ]}
        />
        <TechRow
          title={`DevOps`}
          subtitle="Sed ut perspiciatis unde omnis iste natus."
          iconsArray={[
            '/icons/techs/docker.png',
            '/icons/techs/jira.png',
            '/icons/techs/bitbucket.png',
            '/icons/techs/git.png',
            '/icons/techs/jenkins.png',
            '/icons/techs/nginx.png',
            '/icons/techs/awsblack.png'
          ]}
        />
        <TechRow
          title="Tools"
          subtitle="Sed ut perspiciatis."
          iconsArray={[
            '/icons/techs/stripe.png',
            '/icons/techs/materialui.png',
            '/icons/techs/bootstrap.png',
            '/icons/techs/twilio.png',
            '/icons/techs/onesignal.png',
            '/icons/techs/postman.png',
            '/icons/techs/firebase.png'
          ]}
        />
        <TechRow
          title="Languages"
          subtitle="Sed ut perspiciatis unde omnis iste natus."
          iconsArray={[
            '/icons/techs/sql.png',
            '/icons/techs/python.png',
            '/icons/techs/js.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png',
            '/icons/techs/null.png'
          ]}
        />
      </Techs>
      <TextBody>
        <Header>{t('pageThree.header')}</Header>
        <Title>{t('pageThree.title')}</Title>
        <Content>
          <p>{t('pageThree.pa')}</p>
          <p>{t('pageThree.pb')}</p>
        </Content>
      </TextBody>
    </Container>
  );
};

export default PageThree;
