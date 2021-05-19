import styled from "styled-components"
import { cover, linearGradient, lighten, adjustHue } from "polished"


//#0C1E3C
//#0E1027

export const Container = styled.div`
    ${cover()};
    background: ${props => props.theme.colors.background};
    ${props => linearGradient({
        colorStops: [`#0C1E3C 0%`, `${props.theme.colors.background} 85%`],
        toDirection: '100deg',
        fallback: `${props.theme.colors.background}`,
})}
`