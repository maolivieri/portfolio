import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: calc(60px + 5vh);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow: visible;
  width: 100%;
  /* min-height: 90%; */
  @media (max-width: 992px) {
    padding-top: 1rem;
    padding-left: 3rem;
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

export const Body = styled.div``;

export const HeaderTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 5rem;
  color: ${(props) => props.theme.colors.white};
`;
