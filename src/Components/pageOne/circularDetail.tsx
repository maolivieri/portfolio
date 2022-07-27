import styled from 'styled-components';
import { size, transparentize } from 'polished';
import Image from 'next/image';

const Circle = styled.div`
  position: absolute;
  top: -1px;
  right: -15rem;
  background: ${(props) => transparentize('0.8', props.theme.colors.white)};
  width: 100vh;
  height: 100vh;
  border-radius: 999999px;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

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

export const CircularDetail = ({ page }) => {
  return (
    <Circle>
      <div
        style={{
          // position: 'absolute',
          // top: '15vh',
          // right: '-3vw',
          width: '120vh'
        }}
      >
        <Image
          src="/images/darkmap.png"
          width={1301}
          height={739}
          layout="responsive"
        />
      </div>
      <div></div>
    </Circle>
  );
};