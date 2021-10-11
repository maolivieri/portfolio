import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken } from 'polished';

export const ScrollerStyles = styled.div`
  &::-webkit-scrollbar {
    width: 0.7rem;
    /* border: 1px solid red; */
  }
  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`;

export const ScrollerStylesBody = styled.div`
  &::-webkit-scrollbar {
    width: 0.7rem;
    /* border: 1px solid red; */
  }
  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`;

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
  margin-left: calc(25vw - 4rem - 2.7rem + 18px);
  margin-bottom: 1rem;
  @media (max-width: 992px) {
    margin-left: 0;
    margin-bottom: 0.4rem;
  }
`;

export const Body = styled(ScrollerStylesBody)`
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
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const HeaderTitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 5vw;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1200) {
    /* width: 55px; */
    max-height: 100%;
    font-size: 5.5vw;
    /// small pc screens
  }
  @media (max-width: 992px) {
    /* width: 55px; */
    max-height: 100%;
    font-size: 10vw;
    /// small pc screens
  }
`;

export const ContainerScrollFull = styled(ScrollerStyles)`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  @media (max-width: 992px) {
    /* width: 55px; */
    max-height: 100%;
    /// small pc screens
  }
`;

export const ContainerScrollHalf = styled(ScrollerStyles)`
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
  @media (max-width: 992px) {
    max-height: 100%;
    /// small pc screens
  }
`;

export const CodeSnippetScrollFull = styled(ScrollerStyles)`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
`;

export const CodeSnippetScrollHalf = styled(ScrollerStyles)`
  width: 100%;
  max-height: 35vh;
  overflow-y: scroll;
`;

export const ImageScrollFull = styled(ScrollerStyles)`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
`;

export const ImageScrollHalf = styled(ScrollerStyles)`
  width: 100%;
  max-height: 35vh;
  overflow-y: scroll;
`;

export const VideoScrollFull = styled(ScrollerStyles)`
  width: 100%;
`;

export const VideoScrollHalf = styled(ScrollerStyles)`
  width: 100%;
`;
