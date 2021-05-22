import styled from "styled-components";
import StyledLink from "../../Design/StyledLink"
import { darken } from "polished"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Body = styled.div`
  padding-left: 3rem; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%

`

export const Header = styled.h2`
  margin: 3rem 0rem 1rem 0rem;
  color: ${props => props.theme.colors.secondary};
  font-family: Harmattan;
`

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: Yeseva One;
  font-size: 7rem;
  color: ${props => props.theme.colors.white};
`

export const Content = styled.p`
  padding: 0;
  margin: 5rem 0rem 1rem 0rem;
  color: ${props => props.theme.colors.primary};

`

