import { ArrowLeft, ArrowRight } from './styles';

// const SliderArrows = ({ slider, currentSlide }) => {
export const SliderArrows = ({ slider, currentSlide }) => {
  return (
    <>
      <div
        style={{ position: 'absolute', top: '50%', left: '7rem', zIndex: 1000 }}
      >
        <ArrowLeft
          disabled={currentSlide === 0}
          onClick={(e) => e.stopPropagation() || slider.prev()}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '5rem',
          zIndex: 1000
        }}
      >
        <ArrowRight
          disabled={currentSlide === slider.details().size - 1}
          onClick={(e) => e.stopPropagation() || slider.next()}
        />
      </div>
    </>
  );
};

// export default SliderArrows;
