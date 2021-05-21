import styled from "styled-components";
import StyledLink from "../../Design/StyledLink"
import { darken } from "polished"

export const Container = styled.div`
  width: 100%;
  /* background: ${(props) => props.theme.colors.background}; */
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem 2rem 9rem;
`;


export const NavLink = styled(StyledLink)`
  margin: 0 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => darken(0.2, props.theme.colors.primary)};
  }

  &:focus {
    color: ${props => darken(0.3, props.theme.colors.primary)};
    outline: none;
    border: 0;
  }
`;


export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0.5rem;
`;
