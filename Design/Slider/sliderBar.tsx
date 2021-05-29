import { SlideBar, SlideBarDot, SlideBarContainer } from './styles';

export const SliderBar = ({ slider, currentSlide }) => {
  return (
    <SlideBarContainer>
      <SlideBar>
        {[...Array(slider.details().size).keys()].map((idx) => {
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
