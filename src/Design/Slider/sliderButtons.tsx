import { SlideBar, SlideBarDot, SlideBarContainer } from './styles';

export const SliderBar = ({ slider, currentSlide }) => {
  const sliderSize = slider.details().size;

  const ArrayOfSlides = Array.apply(null, Array(sliderSize));

  return (
    <SlideBarContainer>
      <SlideBar>
        {ArrayOfSlides.map((element: any, idx: number) => {
          return (
            <SlideBarDot
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx);
              }}
              isActive={currentSlide === idx}
              hasPast={currentSlide >= idx}
            />
          );
        })}
      </SlideBar>
    </SlideBarContainer>
  );
};

// export default SliderButtons;
