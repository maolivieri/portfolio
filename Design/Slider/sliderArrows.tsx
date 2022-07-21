import { ArrowLeft, ArrowRight } from './styles';

import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

export const Wrapper = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

type IProps = {
  slider: any;
  currentSlide: number;
};

// const SliderArrows = ({ slider, currentSlide }) => {
export const SliderArrows = ({ slider, currentSlide }: IProps) => {
  return (
    <Wrapper>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '3rem',
          zIndex: 1000
        }}
      >
        <ArrowLeft
          disabled={currentSlide === 0}
          onClick={(e) => {
            e.stopPropagation();
            slider.prev();
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '3rem',
          zIndex: 1000
        }}
      >
        <ArrowRight
          disabled={currentSlide === slider.details().size - 1}
          onClick={(e) => {
            e.stopPropagation();
            slider.next();
          }}
        />
      </div>
    </Wrapper>
  );
};

// export default SliderArrows;
