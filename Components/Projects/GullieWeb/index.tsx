import { Container, Content, Description, Graphics, Title } from './styles';

const GullieWebCard = () => {
  return (
    <Container>
      <Content>
        <Title>Gullie Web</Title>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
        </Description>
      </Content>
      <Graphics>
        <video
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
        </video>
      </Graphics>
    </Container>
  );
};

export { GullieWebCard };
