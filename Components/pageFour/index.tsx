import { useTheme } from 'styled-components';

import { Container, Header, Body, HeaderTitle, Title } from './styles';

import ProjectCardMobile from '../../design/projectCard/projectCardMobile';
import ProjectCard from '../../design/projectCard/projectCard';
import { GullieManager } from './projects/GullieManager';
import { GullieMenu } from './projects/GullieMenu';
import { GullieAPI } from './projects/GullieAPI';

const PageFour = ({ t }) => {
  const pageTheme = useTheme();
  return (
    <Container>
      <Header>
        <HeaderTitle>{t('pageFour.header')}</HeaderTitle>
        <Title>{t('pageFour.title')}</Title>
      </Header>
      <Body>
        <ProjectCard
          t={t}
          hasLink={false}
          link="/"
          // imageName=""
          iconsArray={[]}
          isFullW={true}
          title="Gullie Admin"
          text={`Gullie é um projeto pessoal de um ecomerce e menu interativo para restaurantes. 
          No painel administrativo desse projeto, usuários podem criar produtos, adicionar e recortar imagem do produto e criar conogramas pelo uso de um calendário criado por mim. 
          O calendario tem funcoes de 'drag and drop' e permite facilmente que o usuário edite e atualize cronogramas.`}
          content={<GullieManager />}
        />
        <ProjectCardMobile
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          title="Gullie Menu"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
          content={<GullieMenu />}
        />
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={false}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
          content={<GullieAPI />}
        />
      </Body>
    </Container>
  );
};

export default PageFour;
