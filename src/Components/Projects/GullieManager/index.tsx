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

const GullieManagerCard = ({ translate }: IProps) => {
  return (
    <Container>
      <Content>
        <Title>Gullie Manager</Title>
        <Description>
          <p>{translate('projects.gullieManager.a')}</p>
          <p>{translate('projects.gullieManager.b')}</p>
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
          <source src="/videos/gullie_manager.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieManagerCard };
