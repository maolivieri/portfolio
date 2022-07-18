import styled from 'styled-components';

interface ActiveProp {
  active: boolean;
}

export const ControlWheel = styled.div`
  position: relative;
  //   background: white;
  display: none;
  width: 50vh;
  height: 50vh;
  transform: matrix(1, 0, 0, 1, 0, 0);
  border-radius: 50%;
  //   transition-delay: 0;
  transition-duration: 0.5s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);

  @media (min-width: 768px) {
    display: block;
  }

  &:after {
    position: absolute;
    content: '';
    top: 5vh;
    left: 5vh;
    width: calc(100% - 10vh);
    height: calc(100% - 10vh);
    /* border: 0.15rem solid #9098f7; */
    border: 0.15rem solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }

  ul {
    position: absolute;
  }
`;

export const Item = styled.li<ActiveProp>`
  width: 25vh;
  height: 25vh;
  transform-origin: 100% 100%;
  position: absolute;
  list-style-type: none;

  p {
    display: block;
    position: absolute;
    width: 15vh;
    bottom: 5.3vh;
    right: 5.3vh;
    text-align: center;
    transform: skew(-45deg) rotate(-67.5deg);
    color: ${(props) => props.theme.colors.primary};
    /* color: #9098f7; */
    opacity: ${(props) => (props.active ? 1 : 0.6)};
    font-weight: 600;
  }
`;
