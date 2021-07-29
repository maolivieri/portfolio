import styled from 'styled-components';
import { size, transparentize } from 'polished';

// const wHeight = typeof window !== 'undefined' ? window.innerHeight : `0`;
// const getOpacity = typeof window !== 'undefined' ? '0' : '1';

const Circle = styled.div`
  /* top: calc(-60px - 3rem); */
  /* ${size('100%')}; */
  /* ${size(wHeight)}; */
  position: absolute;
  top: -1px;
  right: -15rem;
  background: ${(props) => transparentize('0.8', props.theme.colors.white)};
  width: 100vh;
  height: 100vh;
  border-radius: 999999px;
  z-index: -1;
  @media (max-width: 992px) {
    position: relative;
    /* right: -0rem; */
    /* top: 33vh; */
    top: -10vh;
    right: -20rem;
    width: 60vw;
    height: 60vw;
    border-radius: 999999px;
    z-index: 0;
    overflow-x: hidden;
    margin-bottom: -10vh;
  }
`;

const CircularDetail = () => {
  return <Circle />;
};

export default CircularDetail;
