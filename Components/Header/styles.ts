import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.background};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem 2rem 9rem;
`;

export const NavigationItem = styled.li`
    list-style-type: none;
    margin: 0 3rem;
    color: ${props => props.theme.colors.primary};
`;

export const LinksNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OptionsNav = styled.nav`   
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ThemeToggleItem = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
    margin: 0 0.5rem;
`;
export const LanguageItem = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
    margin: 0 0.5rem;
`;