import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  top: calc(-60px - 3rem);
  right: -5rem;
  background: red;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  z-index: -1000;
`;

const CircularDetail = () => {
  return <Circle>a</Circle>;
};

export default CircularDetail;
