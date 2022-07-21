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
        <Description>{translate('projects.gullieWeb.description')}</Description>
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
          <source src="/images/videos/menu.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieWebCard };
