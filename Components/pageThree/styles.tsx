import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: calc(60px + 5vh);
  padding-bottom: 1.5rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-start;
  padding-left: 3rem;
  overflow: visible;
  width: 100%;
  /* min-height: 90%; */
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-left: 0;
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  height: calc(95vh - 60px - 7vh);
  width: 40%;
  @media (max-width: 1680px) {
    width: 45%;
  }
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 992px) {
    order: 1;
    width: 80%;
    height: calc(65vh);
  }
`;

export const TextBody = styled.div`
  width: 40%;
  margin-left: 6rem;
  @media (max-width: 1680px) {
    margin-left: 5rem;
    width: 38%;
  }
  @media (max-width: 1200px) {
    margin-left: 4rem;
    width: 30%;
  }
  @media (max-width: 992px) {
    order: 0;
    width: 80%;
    margin-left: 0rem;
    margin-bottom: 1.5rem;
  }
`;

export const Header = styled.h2`
  margin-top: 0rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 0rem;
  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 4vw;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 992px) {
    font-size: 10vw;
  }
`;

export const Content = styled.p`
  padding: 0;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
`;
