import styled, { DefaultTheme } from 'styled-components';
import { cover, linearGradient, transparentize } from 'polished';

//#0C1E3C
//#0E1027

export const Container = styled.div`
  ${cover()};
  background: ${(props) => props.theme.colors.background};
  ${(props) =>
    linearGradient({
      colorStops: [
        props.theme.name === 'dark' ? '#0C1E3C 0%' : 'rgba(0, 0, 0, 0.3) 0%',
        `${props.theme.colors.background} 85%`
      ],
      toDirection: '100deg',
      fallback: `${props.theme.colors.background}`
    })}
`;

export const BodyContainer = styled.div``;

export const PageContainer = styled.div``;

export const SlideBarContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
