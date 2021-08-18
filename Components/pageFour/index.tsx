import {
  Container,
  Header,
  Body,
  HeaderTitle,
  Title,
  ImageScrollFull,
  ImageScrollHalf,
  VideoScrollFull,
  VideoScrollHalf
} from './styles';
import ProjectCard from '../../design/projectCard/projectCard';
import Image from 'next/image';

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
          content={
            <ImageScrollFull>
              <Image
                src="/images/snippets/djangoCustomAPIHandling_811_767.png"
                width="811"
                height="767"
                layout="responsive"
              />
            </ImageScrollFull>
          }
        />
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={false}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
          content={
            <ImageScrollHalf>
              <Image
                src="/images/snippets/djangoCustomAPIHandling_811_767.png"
                width="811"
                height="767"
                layout="responsive"
              />
            </ImageScrollHalf>
          }
        />
        <ProjectCard
          t={t}
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={false}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
          content={
            <VideoScrollHalf>
              <video
                width="100%"
                // height="100%"
                autoPlay
                playsInline
                loop
                muted
                // controls
              >
                <source
                  src="/images/videos/calendarDragandDrop2.webm"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </VideoScrollHalf>
          }
        />
      </Body>
    </Container>
  );
};

export default PageFour;
