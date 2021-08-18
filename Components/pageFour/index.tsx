import {
  Container,
  Header,
  Body,
  HeaderTitle,
  Title,
  ImageScrollFull,
  ImageScrollHalf,
  VideoScrollFull,
  VideoScrollHalf,
  CodeSnippetScrollFull
} from './styles';
import ProjectCard from '../../design/projectCard/projectCard';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { CodeBlock, dracula, monokaiSublime, github } from 'react-code-blocks';

const codeSnippetA = `const Layout = (props) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </div>
  );
};`;

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
          link="/projects"
          // imageName=""
          iconsArray={[]}
          isFullW={true}
          title="Gullie Backend"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
          content={
            <CodeSnippetScrollFull>
              <CodeBlock
                text={codeSnippetA}
                language="tsx"
                showLineNumbers
                wrapLines
                theme={pageTheme.name === 'dark' ? dracula : github}
              />
            </CodeSnippetScrollFull>
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
      </Body>
    </Container>
  );
};

export default PageFour;
