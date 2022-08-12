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

const GullieAdminCard = ({ translate }: IProps) => {
  return (
    <Container>
      <Content>
        <Title>Gullie Admin</Title>
        <Description>
          {translate('projects.gullieAdmin.description')}
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
          <source src="/videos/gullie_master.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieAdminCard };
