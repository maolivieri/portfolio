import { CodeBlock, dracula, github } from 'react-code-blocks';
import { useTheme } from 'styled-components';
import {
  Container,
  Content,
  Description,
  Graphics,
  Title,
  VideoPlayer
} from './styles';

type IProps = {
  translate: any;
};

const GullieAPICard = ({ translate }: IProps) => {
  const globalTheme = useTheme();

  return (
    <Container>
      <Content>
        <Title>Gullie API</Title>
        <Description>
          <p>{translate('projects.gullieAPI.a')}</p>
          <p>{translate('projects.gullieAPI.b')}</p>
          <p>{translate('projects.gullieAPI.c')}</p>
        </Description>
      </Content>
      <Graphics>
        <VideoPlayer
          // width="100%"
          // height="100%"
          autoPlay
          playsInline
          loop
          muted
          // controls
        >
          <source src="/videos/gullie_API.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieAPICard };
