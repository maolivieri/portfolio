import { ArrowLeft, ArrowRight } from './styles';

import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

// const SliderArrows = ({ slider, currentSlide }) => {
export const SliderArrows = ({ slider, currentSlide }) => {
  return (
    <Wrapper>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '7rem',
          zIndex: 1000
        }}
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
    </Wrapper>
  );
};

// export default SliderArrows;
