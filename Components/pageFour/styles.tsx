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
  margin-bottom: 2rem;
  @media (max-width: 992px) {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Body = styled.div`
  height: 70vh;
  width: 100%;
  padding-right: 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  overflow-y: scroll;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    overflow: auto;
  }
`;

export const HeaderTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 4.5rem;
  color: ${(props) => props.theme.colors.white};
`;
