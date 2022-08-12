import styled from 'styled-components';

export const Container = styled.div`
  padding-top: calc(60px + 5vh);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: visible;
  @media (max-width: 992px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const Body = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  @media (max-width: 992px) {
    width: 80%;
  }
`;

export const Header = styled.h2`
  margin-top: 3rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.6rem;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 7vw;
  color: ${(props) =>
    props.theme.name === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
  @media (max-width: 576px) {
    font-size: 11vw;
  }
`;

export const Content = styled.p`
  padding: 0;
  font-size: 1rem;
  color: ${(props) =>
    props.theme.name === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.details};
`;
