import { CodeBlock, dracula, github } from 'react-code-blocks';
import { useTheme } from 'styled-components';
import { Container, Content, Description, Graphics, Title } from './styles';

type IProps = {
  translate: any;
};

const GullieAPICard = ({ translate }: IProps) => {
  const globalTheme = useTheme();

  return (
    <Container>
      <Content>
        <Title>Gullie API</Title>
        <Description>{translate('projects.gullieAPI.description')}</Description>
      </Content>
      <Graphics>
        <CodeBlock
          text={``}
          language="typescript"
          showLineNumbers
          wrapLines
          theme={globalTheme.name === 'dark' ? dracula : github}
        />
        {/* <VideoPlayer
          // width="100%"
          // height="100%"
          autoPlay
          playsInline
          loop
          muted
          // controls
        >
          <source src="/images/videos/menu.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer> */}
      </Graphics>
    </Container>
  );
};

export { GullieAPICard };
