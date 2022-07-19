import { CodeBlock, dracula, github } from 'react-code-blocks';
import { useTheme } from 'styled-components';
import { Container, Content, Description, Graphics, Title } from './styles';

const customAPI = `class VenueUpdateSerializer(serializers.ModelSerializer):
banner_image = Base64ImageField(
    max_length=None, use_url=True, allow_null=True)

class Meta:
    model = Venues
    fields = '__all__'

def update(self, instance, validated_data):
    try:
        ACCESSIBILITY = validated_data.pop('accessibility')
        instance.accessibility.set(ACCESSIBILITY)
    except:
        pass
    try:
        CUISINE = validated_data.pop('cuisine')
        instance.cuisine.set(CUISINE)
    except:
        pass
    instance.name = validated_data.get('name', instance.name)
    [setattr(instance, k, v) for k, v in validated_data.items()]

    instance.save()

    return instance`;

const GullieAPICard = () => {
  const globalTheme = useTheme();

  return (
    <Container>
      <Content>
        <Title>Gullie API</Title>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
        </Description>
      </Content>
      <Graphics>
        <CodeBlock
          text={customAPI}
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
