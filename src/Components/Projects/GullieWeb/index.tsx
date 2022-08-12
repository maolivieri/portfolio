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

const GullieWebCard = ({ translate }: IProps) => {
  return (
    <Container>
      <Content>
        <Title>Gullie Web</Title>
        <Description>
          <p>{translate('projects.gullieWeb.a')}</p>
          <p>{translate('projects.gullieWeb.b')}</p>
          <p>{translate('projects.gullieWeb.c')}</p>
        </Description>
      </Content>
      <Graphics>
        <VideoPlayer
          // width="100%"
          height="100%"
          autoPlay
          playsInline
          loop
          muted
          // controls
        >
          <source src="/videos/gullie_web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieWebCard };
