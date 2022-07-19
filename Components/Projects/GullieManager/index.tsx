import {
  Container,
  Content,
  Description,
  Graphics,
  Title,
  VideoPlayer
} from './styles';

const GullieManagerCard = () => {
  return (
    <Container>
      <Content>
        <Title>Gullie Manager</Title>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
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
          <source src="/images/videos/productdetails.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </Graphics>
    </Container>
  );
};

export { GullieManagerCard };
