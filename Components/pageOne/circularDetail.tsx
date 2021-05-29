import styled from 'styled-components';
import { size, transparentize } from 'polished';

const wHeight = typeof window !== 'undefined' ? window.innerHeight : `0`;
const getOpacity = typeof window !== 'undefined' ? '0' : '1';

const Circle = styled.div`
  position: absolute;
  /* top: calc(-60px - 3rem); */
  top: -1px;
  right: -15rem;
  background: ${(props) => transparentize('0.8', props.theme.colors.white)};
  /* ${size('100%')}; */
  ${size(wHeight)};
  /* width: 100vh;
  height: 100%; */
  border-radius: 50%;
  z-index: -1;
`;

const CircularDetail = () => {
  return <Circle>a</Circle>;
};

export default CircularDetail;
