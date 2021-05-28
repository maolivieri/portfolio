import { SlideBar, SlideBarDot } from './styles';

export const SliderButtons = ({ slider, currentSlide }) => {
  return (
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
  );
};

// export default SliderButtons;
