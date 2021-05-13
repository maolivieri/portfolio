import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    height: 60px;
    color: ${props => props.theme.colors.scondary}
`;