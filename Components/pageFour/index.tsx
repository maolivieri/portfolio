import { Container, Header, Body, HeaderTitle, Title } from './styles';
import ProjectCard from '../../design/projectCard/projectCard';

const PageFour = ({ t }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>{t('pageFour.header')}</HeaderTitle>
        <Title>{t('pageFour.title')}</Title>
      </Header>
      <Body>
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={true}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        />
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={false}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        />
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={false}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        />
      </Body>
    </Container>
  );
};

export default PageFour;
