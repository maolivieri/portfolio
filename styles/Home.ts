import styled, { DefaultTheme } from 'styled-components';
import { cover, linearGradient, transparentize } from 'polished';

//#0C1E3C
//#0E1027

export const Container = styled.div`
  min-height: 100vh;
  /* ${cover()}; */
  background: ${(props) => props.theme.colors.background};
  ${(props) =>
    linearGradient({
      colorStops: [
        props.theme.name === 'dark' ? '#0C1E3C 0%' : 'rgba(0, 0, 0, 0.3) 0%',
        `${props.theme.colors.background} 85%`
      ],
      toDirection: '100deg',
      fallback: `${props.theme.colors.background}`
    })};
  /* overflow: visible; */
  @media (max-width: 992px) {
    /// small pc screens
    /* overflow-x: hidden; */
  }
`;

export const Body = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileBody = styled.div`
  ///mobile
  overflow-x: hidden;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const PG = styled.div`
  overflow: visible;
  z-index: 10;
`;
