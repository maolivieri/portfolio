import Carousel from 'nuka-carousel';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { CodeBlock, dracula, github } from 'react-code-blocks';

import { ContainerScrollHalf } from '../styles';

const customAPI = `class AreasUpdateAPI(UpdateAPIView):
    queryset = Area.objects.all()
    permission_classes = [HasAreaVenueObjAccess]
    serializer_class = AreaSerializer
    lookup_field = 'pk'

    def update(self, request, *ards, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_calid(raise_exception=True)
        area = serializer.save()
        return Response(AreaFullSerializer(area).data)`;

const customSerializer = `class VenueUpdateSerializer(serializers.ModelSerializer):
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

const modelRelations = `class ModifierPrice(models.Model):
modifier = models.ForeignKey(Modifier, on_delete=models.CASCADE, related_name="prices")
size = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(6)])
price = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)

class Meta:
    unique_together = ('size', 'modifier',)
    ordering = ['size', 'pk']`;

const GullieAPI = (props) => {
  const globalTheme = useTheme();
  return (
    <ContainerScrollHalf>
      <Carousel
        autoplay
        pauseOnHover
        wrapAround
        autoplayInterval={6000}
        renderBottomCenterControls={({ slideCount, currentSlide }) => (
          <div
            style={{
              display: 'flex',
              zIndex: 1000,
              width: slideCount === 1 ? 0 : '100%',
              alignItems: 'center'
            }}
          >
            {Array.from(Array(slideCount).keys()).map((x, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '99999px',
                  background: globalTheme.colors.highlights,
                  width: currentSlide === i ? '0.9rem' : '0.5rem',
                  height: currentSlide === i ? '0.9rem' : '0.5rem',
                  margin: '0.8rem 0.5rem'
                }}
              />
            ))}
          </div>
        )}
        style={{ width: '100%' }}
        renderCenterLeftControls={({ previousSlide, slideCount }) => (
          <button
            onClick={previousSlide}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.6rem',
              color:
                slideCount === 1 ? 'transparent' : globalTheme.colors.highlights
            }}
          >
            <FaAngleLeft />
          </button>
        )}
        renderCenterRightControls={({ nextSlide, slideCount }) => (
          <button
            onClick={nextSlide}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.6rem',
              color:
                slideCount === 1 ? 'transparent' : globalTheme.colors.highlights
            }}
          >
            <FaAngleRight />
          </button>
        )}
      >
        <div>
          <CodeBlock
            text={customAPI}
            language="typescript"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
        <div>
          <CodeBlock
            text={customSerializer}
            language="python"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
        <div>
          <CodeBlock
            text={modelRelations}
            language="python"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
      </Carousel>
    </ContainerScrollHalf>
  );
};

export { GullieAPI };
