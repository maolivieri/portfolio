import styled from 'styled-components';
import { darken } from 'polished';

export const PageContainer = styled.div`
  padding-top: calc(60px + 5vh);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  overflow: visible;
  width: 100%;
  min-height: 90%;

  @media (max-width: 992px) {
    overflow-x: hidden;
    padding-top: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 58%;
  min-height: 100%;
  margin-left: 5vw;
  @media (max-width: 992px) {
    width: 80%;
    overflow-x: hidden;
    margin-left: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const BodyContent = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 992px) {
    padding-left: 0rem;
  }
`;

export const Header = styled.h2`
  margin: 3rem 0rem 0rem 0rem;
  padding: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.8rem;
  @media (max-width: 992px) {
    margin: 0rem;
    font-size: 2remrem;
  }
`;

export const Title = styled.h1`
  width: 50%;
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 5.5vw;
  color: ${(props) =>
    props.theme.name === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
  @media (max-width: 992px) {
    font-size: 10vw;
  }
`;

export const Subtitle = styled.p`
  padding: 0;
  margin: 1rem 0rem 0.2rem 0rem;
  color: ${(props) => props.theme.colors.highlights};
  font-size: 1rem;
  /* line-height: 1.3rem; */
  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const Content = styled.p`
  padding: 0;
  margin: 0rem 0rem 0.5rem 0rem;
  color: ${(props) =>
    props.theme.name === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.details};
  font-size: 0.9rem;
  line-height: 150%;
  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const DowloadButton = styled.a`
  padding: 0.7rem 1.3rem;
  /* margin: 1rem 0rem 1rem 0rem; */
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 15px;
  font-size: 0.9rem;
  box-sizing: border-box;
  border: 0.1em solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s;
  cursor: pointer;
  :hover {
    border: 0.1em solid rgba(255, 255, 255, 0.5);
    background: ${(props) => darken('0.1', props.theme.colors.secondary)};
    color: ${(props) => props.theme.colors.white};
  }
  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;
